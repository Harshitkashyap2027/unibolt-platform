/**
 * ELO Ranking Algorithm
 * Formula: R_new = R_old + K * (W - W_expected)
 * W_expected = 1 / (1 + 10^((R_opponent - R_player) / 400))
 */

const K_FACTOR_DEFAULT   = 32;
const K_FACTOR_BEGINNER  = 40; // < 10 games
const K_FACTOR_MASTER    = 16; // > 30 games and rating > 2000
const INITIAL_RATING     = 1200;
const FLOOR_RATING       = 100;

/**
 * Calculate expected win probability for player against opponent.
 * @param {number} ratingPlayer   - Current ELO of the player
 * @param {number} ratingOpponent - Current ELO of the opponent
 * @returns {number} Expected score (0–1)
 */
export function expectedScore(ratingPlayer, ratingOpponent) {
  return 1 / (1 + Math.pow(10, (ratingOpponent - ratingPlayer) / 400));
}

/**
 * Get dynamic K-factor based on games played and rating.
 * @param {number} gamesPlayed
 * @param {number} rating
 * @returns {number} K-factor
 */
export function getKFactor(gamesPlayed = 0, rating = INITIAL_RATING) {
  if (gamesPlayed < 10) return K_FACTOR_BEGINNER;
  if (gamesPlayed > 30 && rating > 2000) return K_FACTOR_MASTER;
  return K_FACTOR_DEFAULT;
}

/**
 * Calculate new ELO rating after a match.
 * @param {number} ratingPlayer   - Current ELO of the player
 * @param {number} ratingOpponent - Current ELO of the opponent
 * @param {number} actualScore    - 1 = win, 0.5 = draw, 0 = loss
 * @param {number} [gamesPlayed]  - Games played (affects K-factor)
 * @returns {{ newRating: number, delta: number, expected: number }}
 */
export function calculateNewRating(ratingPlayer, ratingOpponent, actualScore, gamesPlayed = 0) {
  const expected = expectedScore(ratingPlayer, ratingOpponent);
  const k = getKFactor(gamesPlayed, ratingPlayer);
  const delta = Math.round(k * (actualScore - expected));
  const newRating = Math.max(FLOOR_RATING, ratingPlayer + delta);
  return { newRating, delta, expected: parseFloat(expected.toFixed(4)) };
}

/**
 * Process a full match between two players and return updated ratings for both.
 * @param {Object} player   - { id, rating, gamesPlayed, wins, losses, streak }
 * @param {Object} opponent - { id, rating, gamesPlayed, wins, losses, streak }
 * @param {'win'|'loss'|'draw'} result - Result from the PLAYER's perspective
 * @returns {{ player: Object, opponent: Object }}
 */
export function processMatch(player, opponent, result) {
  const WIN  = 1;
  const DRAW = 0.5;
  const LOSS = 0;

  const playerScore   = result === 'win'  ? WIN  : result === 'draw' ? DRAW : LOSS;
  const opponentScore = result === 'loss' ? WIN  : result === 'draw' ? DRAW : LOSS;

  const playerResult   = calculateNewRating(player.rating,   opponent.rating, playerScore,   player.gamesPlayed);
  const opponentResult = calculateNewRating(opponent.rating, player.rating,   opponentScore, opponent.gamesPlayed);

  const updatedPlayer = {
    ...player,
    rating:      playerResult.newRating,
    gamesPlayed: (player.gamesPlayed || 0) + 1,
    wins:        result === 'win'  ? (player.wins  || 0) + 1 : (player.wins  || 0),
    losses:      result === 'loss' ? (player.losses || 0) + 1 : (player.losses || 0),
    streak:      result === 'win'
      ? (player.streak >= 0 ? player.streak + 1 : 1)
      : result === 'loss'
        ? (player.streak <= 0 ? player.streak - 1 : -1)
        : 0,
    lastDelta:   playerResult.delta,
  };

  const updatedOpponent = {
    ...opponent,
    rating:      opponentResult.newRating,
    gamesPlayed: (opponent.gamesPlayed || 0) + 1,
    wins:        result === 'loss' ? (opponent.wins  || 0) + 1 : (opponent.wins  || 0),
    losses:      result === 'win'  ? (opponent.losses || 0) + 1 : (opponent.losses || 0),
    streak:      result === 'loss'
      ? (opponent.streak >= 0 ? opponent.streak + 1 : 1)
      : result === 'win'
        ? (opponent.streak <= 0 ? opponent.streak - 1 : -1)
        : 0,
    lastDelta:   opponentResult.delta,
  };

  return { player: updatedPlayer, opponent: updatedOpponent };
}

/**
 * Get a human-readable rank title based on ELO rating.
 * @param {number} rating
 * @returns {{ title: string, color: string, icon: string }}
 */
export function getRankTitle(rating) {
  if (rating >= 2400) return { title: 'Grandmaster', color: '#ffd700', icon: '👑' };
  if (rating >= 2200) return { title: 'Master',      color: '#a78bfa', icon: '💎' };
  if (rating >= 2000) return { title: 'Expert',      color: '#6366f1', icon: '🔮' };
  if (rating >= 1800) return { title: 'Advanced',    color: '#38bdf8', icon: '⚡' };
  if (rating >= 1600) return { title: 'Intermediate',color: '#22c55e', icon: '🌟' };
  if (rating >= 1400) return { title: 'Developing',  color: '#f59e0b', icon: '🔥' };
  if (rating >= 1200) return { title: 'Beginner',    color: '#9ca3af', icon: '🌱' };
  return                       { title: 'Newcomer',  color: '#6b7280', icon: '🐣' };
}

export { INITIAL_RATING, K_FACTOR_DEFAULT };

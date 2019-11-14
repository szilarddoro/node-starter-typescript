/**
 * Returns a random value between specified limits.
 *
 * @param start - Limit start
 * @param end - Limit end
 * @returns Random number between limits
 */
const getRandomValue = (start: number, end: number) =>
    Math.floor(Math.random() * (end - start + 1)) + start

export { getRandomValue }

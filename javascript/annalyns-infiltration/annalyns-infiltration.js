// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake === true) return false
  else return true
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true) return true
  return false
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake === true && prisonerIsAwake === false) return false;
  if (archerIsAwake === false && prisonerIsAwake === true) return true;
  if (archerIsAwake === false && prisonerIsAwake === false) return false;
  return false;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
if (petDogIsPresent === true && archerIsAwake === false) return true;
if (petDogIsPresent === true && archerIsAwake === true) return false;
if(petDogIsPresent === false){
  if (archerIsAwake === false && knightIsAwake === false && prisonerIsAwake === false) return false;
  if (archerIsAwake === false && knightIsAwake === false && prisonerIsAwake === true) return true;
  if (archerIsAwake === false && knightIsAwake === true && prisonerIsAwake === false) return false;
  if (archerIsAwake === false && knightIsAwake === true && prisonerIsAwake === true) return false;
  if (archerIsAwake === true && knightIsAwake === false && prisonerIsAwake === false) return false;
  if (archerIsAwake === true && knightIsAwake === false && prisonerIsAwake === true) return false;
  if (archerIsAwake === true && knightIsAwake === true && prisonerIsAwake === false) return false;
  if (archerIsAwake === true && knightIsAwake === true && prisonerIsAwake === true) return false;
}
return false
}

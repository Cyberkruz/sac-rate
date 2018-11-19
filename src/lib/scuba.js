/**
 * Calculates the atmospheric pressure at a specified
 * depth in atmospheres (ATM)
 *
 * @param {number} The depth in feet
 * @returns {number} Atmospheres at the specified depth.
 */
function depthToATM(depth) {
  return (depth / 33) + 1
}

/**
 * Calculate the surface air consumption for a
 * section of dive.
 *
 * @param {number} psiIn Starting tank pressure
 * @param {number} psiOut Ending tank pressure
 * @param {number} time Bottom time of dive
 * @param {number} depth Depth in feet
 */
function sac(psiIn, psiOut, time, depth) {
  const dac = (psiIn - psiOut) / time
  return dac / depthToATM(depth)
}

/**
 * Calculates respiratory minute volume against an
 * already obtained surface air consumption calculation
 *
 * @param {number} sacRate Surface air consumption base
 * @param {number} tankVolume Volume of tank used for sac calculation
 * @param {number} tankWorkingPsi Working pressure of tank used for sac
 */
function rmvFromSac(sacRate, tankVolume, tankWorkingPsi) {
  return sacRate * tankVolume / tankWorkingPsi
}

export default {
  sac,
  rmvFromSac,
  depthToATM,
}

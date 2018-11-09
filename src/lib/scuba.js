// const atmPressure = 14.7
// const atmDepth = 33


function calculateSac(psiIn, psiOut, time,
  depth, tankVolume, tankWorkingPsi) {
  const dac = (psiIn - psiOut) / time
  const sac = dac / ((depth / 33) + 1)
  const rmv = sac * tankVolume / tankWorkingPsi
  return rmv
}

function atm(depth) {
  return (depth / 33) + 1
}

function depthToPressure(depth) {
  return (14.7 / 33) * depth
}

export default {
  calculateSac,
  atm,
  depthToPressure,
}

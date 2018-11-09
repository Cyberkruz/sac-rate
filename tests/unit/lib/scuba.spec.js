import scuba from '@/lib/scuba.js'

describe('calculateSac', () => {
  it('caclulates sac rate successfully', () => {
    const res = scuba.calculateSac(3000, 2000, 60, 60, 80, 3000)
    expect(res).toEqual(0.15770609318996415)
  })
})

describe('atm', () => {
  it('calculates atmospheric pressure', () => {
    const res = scuba.atm(33)
    expect(res).toEqual(2)
  })
})

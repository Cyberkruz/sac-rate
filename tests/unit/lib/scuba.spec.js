import scuba from '@/lib/scuba.js'

describe('sac', () => {
  it('caclulates sac rate successfully', () => {
    const res = scuba.sac(2000, 1400, 10, 33)
    expect(res).toEqual(30)
  })
})

describe('rmvFromSac', () => {
  it('calculates rmv successfully', () => {
    const res = scuba.rmvFromSac(30, 80, 3000)
    expect(res).toEqual(0.8)
  })
})

import getColor from '@/fdraw/services/getColor'

describe('getColor.wb', () => {
  it('should render correct wb colors', () => {
    expect(getColor.wb(0.0)).to.deep.equal({ r: 255, g: 255, b: 255, a: 255 })
    expect(getColor.wb(0.1)).to.deep.equal({ r: 255, g: 76, b: 255, a: 255 })
    expect(getColor.wb(0.2)).to.deep.equal({ r: 153, g: 0, b: 255, a: 255 })
    expect(getColor.wb(0.3)).to.deep.equal({ r: 0, g: 26, b: 255, a: 255 })
    expect(getColor.wb(0.4)).to.deep.equal({ r: 0, g: 204, b: 255, a: 255 })
    expect(getColor.wb(0.5)).to.deep.equal({ r: 0, g: 255, b: 128, a: 255 })
    expect(getColor.wb(0.6)).to.deep.equal({ r: 51, g: 255, b: 0, a: 255 })
    expect(getColor.wb(0.7)).to.deep.equal({ r: 229, g: 255, b: 0, a: 255 })
    expect(getColor.wb(0.8)).to.deep.equal({ r: 255, g: 102, b: 0, a: 255 })
    expect(getColor.wb(0.9)).to.deep.equal({ r: 179, g: 0, b: 0, a: 255 })
    expect(getColor.wb(1.0)).to.deep.equal({ r: 0, g: 0, b: 0, a: 255 })
  })
})

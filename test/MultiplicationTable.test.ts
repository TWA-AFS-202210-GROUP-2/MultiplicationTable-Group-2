import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1  \n')
  })

  it('should render multiplication table of (1, 2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1  \n2*1=2  2*2=4  \n')
  })
})

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
    expect(rendered).toBe('1*1=1')
  })
  it('should render return "" when start greater then end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 10
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should render return "" when not in range', () => {
    // given
    const table = new MultiplicationTable()
    const start = 11
    const end = 100

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should render return "1*1\n1*2 2*2\n" when input (1,2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1\n1*2=2  2*2=4')
  })
})

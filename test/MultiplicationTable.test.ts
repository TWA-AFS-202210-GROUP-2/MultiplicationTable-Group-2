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

  it('should render "" if start larger than end',()=>{
    const table=new MultiplicationTable()
    const start=3
    const end=1
    const rendered=table.render(start,end)
    expect(rendered).toBe('')
  })

  it('should render "" if the start number and the end number is not integer in a range of 1 to 10',()=>{
    const table=new MultiplicationTable()
    const start=1
    const end=11
    const rendered=table.render(start,end)
    expect(rendered).toBe('')
  })

  it('should render multiplication table of (1, 3)',()=>{
    const table=new MultiplicationTable()
    const start=1
    const end=3
    const rendered=table.render(start,end)
    const expected=`1*1=1
1*2=2  2*2=4
1*3=3  2*3=6  3*3=9`
    expect(rendered).toBe(expected)
  })

  it('should render multiplication table of (2, 5)',()=>{
    const table=new MultiplicationTable()
    const start=2
    const end=5
    const rendered=table.render(start,end)
    const expected=`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
2*5=10  3*5=15  4*5=20  5*5=25`
    expect(rendered).toBe(expected)
  })
})

export function render(start: number, end: number): string {
  const isNotStartGreaterThanEnd = !isStartGreaterThanEnd(start,end)
  const isValidate = isInRange(start, end)
  if (isNotStartGreaterThanEnd&&isValidate) {
    return createTable(start,end)
  }else{
    return ''
  }

}

export function isStartGreaterThanEnd(start: number, end: number) {
  return start > end
}
export function isInRange(start: number, end: number): boolean {
  const range = Array.from(Array(10).keys()).map(x => x+1)
  return range.findIndex(element => element === start) >= 0 && range.findIndex(element => element === end) >= 0
}

export function createTable(start: number, end: number):string {
  const rangeTable = Array.from({length:(end - start +1)},(value,index)=> start + index)
  const tableMultipication:string[] = rangeTable.map((value,index)=> createRow(start,start+index) )
  return tableMultipication.join('\n')
}

export function createRow(startRow: number, endRow: number):string {
  const rangeRow = Array.from({length:(endRow - startRow +1)},(value,index)=> startRow + index)
  const lineMultipication:string[] = rangeRow.map(num => num + '*' + endRow + '=' + endRow*num)
  return lineMultipication.join('  ')
}

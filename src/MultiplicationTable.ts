export class MultiplicationTable {
  public render(start: number, end: number): string{
    let multiplicationTable=''
    const isCorrect=this.isCorrectInput(start,end)
    if(isCorrect){
      const expressions=this.buildExpressions(start,end)
      multiplicationTable=this.generateMultiplicationTable(expressions)
    }
    return multiplicationTable
  }

  isValidInput(start:number,end:number):boolean{
    const isInt:boolean=Math.floor(start)===start && Math.floor(end)===end
    const isOneToTen:boolean=start<=10 && start>=1 && end<=10 && end>=1
    return isInt && isOneToTen
  }

  isStartLessAndEqualEnd(start:number,end:number):boolean{
    return start<=end
  }

  isCorrectInput(start:number,end:number):boolean{
    return this.isValidInput(start,end) && this.isStartLessAndEqualEnd(start,end)
  }

  buildExpressions(start:number,end:number):string[][]{
    const expressions:string[][]=[]
    const rangeArr=this.generateArray(start,end)
    rangeArr.forEach((firstItem:number,index:number)=>{
      expressions.push([])
      rangeArr.slice(0,index+1).forEach((secondItem:number)=>{
        const result=firstItem*secondItem
        const expression=`${secondItem}*${firstItem}=${result}`
        expressions[expressions.length-1].push(expression)
      })
    })
    return expressions
  }

  generateArray(start:number, end:number):number[] {
    return Array.from(new Array(end + 1).keys()).slice(start)
  }

  generateMultiplicationTable(expressions:string[][]):string{
    let result=''
    expressions.forEach((firstItem:string[],firstIndex:number)=>{
      firstItem.forEach((secondItem:string,index:number)=>{
        result+=`${secondItem}`
        if(index!==firstItem.length-1){
          result+='  '
        }
      })
      if(firstIndex!==expressions.length-1){
        result+='\n'
      }
    })
    return result
  }
}

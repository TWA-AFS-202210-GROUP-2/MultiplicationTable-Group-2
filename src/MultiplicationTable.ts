

export class MultiplicationTable {
  public render(start: number, end: number): string{
    if( !this.isVaild(start,end)){
      return ''
    }
    console.log(this.drawMultipleLines(start,end))
    return this.drawMultipleLines(start,end)
  }
  private isVaild(start:number,end:number):boolean{

    return this.isRangeValid(start,end) && this.isSorted(start,end)
  }
  private isSorted(start:number,end:number):boolean{
    return start <= end
  }
  private isRangeValid(start:number,end:number):boolean{
    return start>0 && end<11
  }
  private drawMultipleLines(start:number,end:number):string{
    return Array.from({length:(end-start+1)},(value,index)=>start+index).map((value)=>this.drawOneLine(start,value)).join('\n')
  }
  private drawOneLine(start: number, end: number): string {
    // console.log(Array.from({length:(end-start+1)},(value,index)=>start+index).map((value)=>this.drawCell(value,end)).join('  '))
    return Array.from({length:(end-start+1)},(value,index)=>start+index).map((value)=>this.drawCell(value,end)).join('  ')
  }
  private drawCell(n1:number,n2:number):string{
    return String(n1)+'*'+String(n2)+ '='+ String(n1*n2)
  }


}

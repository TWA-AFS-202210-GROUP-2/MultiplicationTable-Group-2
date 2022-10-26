export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.startIsNotGreaterThanEnd(start,end))
      return ""
    
    if ((!this.numInBetween1and10(start)) ||(!this.numInBetween1and10(end)))
      return "num is out of range"
    return this.generateMultiplication(start,end)
  }

  startIsNotGreaterThanEnd(startNum:number,endNum:number):boolean
  {
    return startNum<endNum||startNum==endNum 
  }

  numInBetween1and10(num:number):boolean
  {
    return num<11&&num>-1
  }

  generateMultiplication(startNum:number,endNum:number):string
  {
  var muiltiplicationStr=""
  for(let i=startNum;i<=endNum;i++)
    for(let j=startNum;j<=endNum;j++)
    {
      muiltiplicationStr=muiltiplicationStr+this.cellString(j,i)
      if(j<i) muiltiplicationStr=muiltiplicationStr+"  "
    }
    muiltiplicationStr=muiltiplicationStr+"\n"
  return muiltiplicationStr
  }

  cellString(num1:number,num2:number):string
  {
  return num1+"*"+num2+"="+num1*num2
  }



}


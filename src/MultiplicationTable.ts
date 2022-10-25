import { start } from "repl"

export class MultiplicationTable {
  public render(start:number,end:number):string{
    if(this.isValid(start,end)){
      return this.getResult(start,end)
    }
    else{
      return ''
    }
  }

  private isValid(start:number,end:number):boolean{
    return this.isGreaterthan(start,end) && this.isInRange(start) && this.isInRange(end)
  }

  private isGreaterthan(start:number,end:number):boolean{
    return start<=end
  }

  private isInRange(num:number):boolean{
    return num<=10&&num>=1
  }

  private getResult(start:number,end:number):string{
    let result = ''
    let i = start
    let j = start
    while(i<=end){
      result = result+this.caculate(i,j)
      j=j+1
      if(j>i){
        result = result+'\n'
        j = start
        i = i+1
      }
    }
    return result
  }

  private caculate(i:number,j:number):string{
    return i.toString()+'*'+j.toString()+'='+(i*j).toString()+'  '
  }
}

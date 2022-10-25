import { start } from "repl"

export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }
}

export function render(start:number,end:number):string{
  if(isGreaterthan(start,end) && isInRange(start) && isInRange(end)){
    return getResult(start,end)
  }
  else{
    return ''
  }
}

function isGreaterthan(start:number,end:number):boolean{
  return start<=end
}

function isInRange(num:number):boolean{
  return num<=10&&num>1
}

function getResult(start:number,end:number){
  let result = ''
  let i = start
  let j = start
  while(i<=end){
    result = result+i.toString+'*'+j.toString+'='+(i*j).toString+'  '
    j=j+1
    if(j>i){
      result = result+'\n'
      j = start
      i = i+1
    }
  }
  return result
}

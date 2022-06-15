class Scheduler{
  constructor(){
    
  }
  async schedule(event: SchedulerEvent) {
    
  }
}

class SchedulerEvent{
  ID:string;
  title:string;
  body:string;
  start:Date;
  end:Date;
  
  constructor(title: string, body:string, start:Date, end:Date){
    this.ID = "ASDSD";
    this.title = title;
    this.body = body;
    
    if(!this.ID) console.error(`Event '${title}' has empty ID ('${this.ID}')`)
    if(!this.title) console.error(`Event '${this.ID}' has empty ${title}`)
    if(start >= end) console.error(`Event '${title}' has start >= end.`)
    
    this.start = start;
    this.end = end;
  }
}

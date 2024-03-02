import { differenceInSeconds }from "date-fns"
import inquirer from "inquirer";
const res=await inquirer.prompt([{
  type:"number",
  name:"userInput",
  message:"Please the amount of second",
  validate: (input)=>{
    if(isNaN(input)){
        return "Please enter valid number"
    }else if(input>60){
      return "Second must be in 60"
    }else{
      return true
    }
  }
}])

let input=res.userInput

function startTime(val:number){
  const intervalTime=new Date().setSeconds(new Date().getSeconds()+val)
  const inteTime=new Date(intervalTime)
  const intTime=new Date().setSeconds(new Date().getSeconds()+val)
  setInterval(()=>{
    const currTime=new Date();
    const timediff=differenceInSeconds(intervalTime,currTime)
  if(timediff <= 0){
    console.log('Timer has expired');
    process.exit()
  }
  const minute=Math.floor((timediff%(3600*24))/3600)
  const second=Math.floor (timediff%60)
  console.log(`${minute.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`);
  
  },1000)
}

startTime(input)


let seconds= 0,
minutes=0,
hours=0;
let intervalID;

const heading= document.querySelector("h1");

const StartWatch=()=>{
  intervalID=setInterval(()=>{
if(seconds<59){
seconds++;
}else if(minutes>=59){
hours++;
minutes=0;
}
else{
  seconds=0;
  minutes++;
}
const sec = String(seconds).padStart(2,"0");
const min = String(minutes).padStart(2,"0");
const hr = String(hours).padStart(2,"0");

const time=`${hr}:${min}:${sec}`;
heading.innerText = time;


},1000)

}
const StopWatch=()=>{
  clearInterval(intervalID);
}
const StopReset=()=>{

// heading.innerText="00:00:00";

// seconds="00";
// minutes="00";
// hours="00";
// clearInterval(intervalID);
 location.reload();// page reload wala trick!!


  
}
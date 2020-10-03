setInterval(showTime,1000);

function showTime(){
    let time=new Date();
    let oneDay=1000*60*60*24;
    let marriage_day=new Date(time.getFullYear(),10,3,12,0,0,0);
    //let daysLeft=Math.round(marriage_day.getTime()-time.getTime())/oneDay;
    //let correctDaysLeft=daysLeft.toFixed(0);
    //get total seconds between time-->JS date in ms
    let delta=Math.abs(marriage_day-time)/1000;
    //Calculate and subtract whole days
    let days=Math.floor(delta/86400);
    delta-=days*86400;
    //calculate and subtract whole hours
    let hours=Math.floor(delta/3600)%24;
    delta-=hours*3600;
    let min=Math.floor(delta/60)%60;
    delta-=min*60;
    let seconds=delta%60;
    document.getElementById("days_left").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("secs").innerHTML=seconds.toFixed(0);
}
showTime();
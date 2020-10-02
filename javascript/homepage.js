setInterval(showTime,1000);

function showTime(){
    let time=new Date();
    let oneDay=1000*60*60*24;
    let marriage_day=new Date(time.getFullYear(),10,4);
    let daysLeft=Math.round(marriage_day.getTime()-time.getTime())/oneDay;
    let correctDaysLeft=daysLeft.toFixed(0);
    let  hours=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let am_pm="AM";
    if(hours>12){
        hours-=12;
        am_pm="PM";
    }
    if(hours==0){
        hours=12;
        am_pm="AM";
    }
    hours=hours<10?"0"+hours:hours;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    document.getElementById("days_left").innerHTML=correctDaysLeft+" days";
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("secs").innerHTML=sec;
    document.getElementById("am_pm").innerHTML=am_pm;
}
showTime();
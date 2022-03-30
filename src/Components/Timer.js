import React from 'react'
import './Timer.css'
import dobbsLogo from '../assets/header/img.png'
import twitterIcon from '../assets/assets_website/pngwing.com.png'
import instagramIcon from '../assets/assets_website/5ecec78673e4440004f09e77.png'
import searchIcon from '../assets/header/search.png'
import discordIcon from "../assets/assets_website/discord-black-icon-703937.png";


const Timer  = () => {

    let  curTime = new Date().toLocaleString();
    let curDate = curTime.toString().split('/');
    let curDay = curDate[0];
    let curMonth = curDate[1];
    let curYear = curDate[2].substring(0,4);
    let time = curTime.split(',');
    let time1 = time[1].split(":");
    let hour = time1[0];
    let minute = time1[1];
    let second = time1[2];

    /////Target time variables//////

    let targetDay = 20;
    //targetDay = targetDay -1 ;
    let daysRem = targetDay - (curDay);

    let targetHour = 20;
    targetHour = targetHour - 1;
    let hoursRem;
    if(targetHour>hour)
        hoursRem = targetHour - hour;
    else
        hoursRem = 24-hour;


    let targetMinute = 0;
    targetMinute = targetMinute-1;
    let minuteRem;
    if(targetMinute>minute)
        minuteRem = targetMinute - minute;
    else
        minuteRem = 59-minute;

    let targetSecond = 0;
    let secondRem;
    secondRem = targetSecond - second;
    if(targetSecond>second)
        secondRem = targetSecond - second;
    else
        secondRem = 60-second;

    const [counter, setCounter] = React.useState(secondRem);

    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer==0) {
            setCounter(60);
        }
        return () => clearInterval(timer);
    }, [counter]);


    //<div className="timer" style={{margin: 0}}><p className="timer-p">MINT AVAILABLE IN: {daysRem} DAYS {hoursRem} HOURS {minuteRem} MINUTES {counter} SECONDS</p></div>

    return (
        <div className="timer" style={{margin: 0}}>
            <p className="timer-p">THE MINT PAGE IS COMING SOON...</p>
            <p className="timer-p">BE THE FIRST TO KNOW</p>
        </div>

    )

}

export default Timer

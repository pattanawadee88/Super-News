import React from 'react'

function Header(){
    const todaydate = new Date();
    let day;
    let month;
    switch(todaydate.getDay()){
        case 0: day= "Sunday";
                break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
       
            break;
        case 3:
            day = "Wednesday";
          
            break;
        case 4:
            day = "Thursday";
        
            break;
        case 5:
            day = "Friday";

            break;
        case 6:
            day = "Saturday";
    
            break;
        default: 
            day = "Hello!";
    }
    switch(todaydate.getMonth()){
        case 0: month = "January";
                break;
        case 1: month = "February";
                break;
                case 2:
            
                    month = "March";
                    break;
                case 3:
               
                    month = "April";
                    break;
                case 4:
            
                    month = "May";
                    break;
                case 5:
         
                    month = "June";
                    break;
                case 6:
    
                    month = "July";
                    break;
                case 7:
                    month = "August";
                    break;
                case 8:
                    month = "September";
                    break;
                case 9:
                    month = "October";
                    break;
                case 10: 
                    month = "November";
                    break;
                case 11: 
                    month = "December";
                    break;
                default: 
                    day = "Happy Month";
    }
    const localTime = todaydate.toLocaleTimeString();
   
    return(
        
        <header id="header">
            <time>{localTime}</time>
            <h1 id="logo">Super News</h1>
            <div id="date"> {day},{month} {todaydate.getDate()}, {todaydate.getFullYear()}</div>
        </header>
    )
}

export default Header
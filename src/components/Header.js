import React from 'react'

function Header(){
    const mydate = new Date();
    const todayDate = mydate.toDateString();
    const localTime = mydate.toLocaleTimeString();
    
    return(
        <header>
            <time>{localTime}</time>
            <h1 id="logo">Super News</h1>
            <date>{todayDate}</date>
        </header>
    )
}

export default Header
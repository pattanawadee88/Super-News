import React from "react"
import '../scss/style.scss'

function DisplayNews(props){
    return(
        <article className="news-container">
            <div>
                <img className="news-img" src={props.img} alt={props.imgAlt}></img>
            </div>
            <div className="source"> 
                <p>{props.imgAlt}<span>{props.source}</span></p>
            </div>
            <div className="text-container">
                <h2 className="title"><a href={props.link}>{props.title}</a></h2>
                <p className="description">{props.abstract}</p>
            </div>
            </article>
    )  
}


export default DisplayNews
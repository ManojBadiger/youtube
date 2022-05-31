import React from 'react'
import './Videorow.css'

const Videorow = (props) => {
    return (
        <div className='vidoRow'>
            <img src={props.image} alt=""/>
            <div className='videorow_text'>
                <h3>{props.title}</h3>
                <p
                className='videorow_headline'
                >{props.channel} ·
                <span className='videorow_subs'>
                <span className='videorow_subscribers'>
                    
                    {props.subs}</span> Subscribers
                </span>{" "}
              
                {props.views} views ·
                {props.timestamp}
                 </p>
                 <p className='videorow_description'>{props.description}</p>
            </div>
            
        </div>
    )
}

export default Videorow
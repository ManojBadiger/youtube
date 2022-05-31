
import { Avatar } from '@mui/material'
import React from 'react'
import './Videocard.css'

export const Videocard = (props) => {
    return (
        <div className='videocard'>
         <img className="videocard_thumbnail" src={props.image}  alt=""/>
         <div className='video_info'>
        <Avatar className='videocard_avatar' 
        alt={props.channel}
        src={props.channelimage}
        />
        <div className='video_text'>
            <h4>{props.title}</h4>
            <p>{props.views}·{props.timestamp} </p>
        </div>
         </div>
        </div>
    )
}
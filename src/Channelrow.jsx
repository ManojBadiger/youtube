import { Avatar } from '@mui/material'
import React from 'react'
import './channelrow.css'
import VerifiedIcon from '@mui/icons-material/Verified';
export default function Channelrow(props) {
  return (
    <div className='channelrow'>
       <Avatar className='channelrow_logo'
       alt={
           props.Channel
       }
       src={props.image}
       />
       <div className="channelrow_text">
           <h4>
               {props.Channel}
               {props.verified && <VerifiedIcon/>}
           </h4>
           <p>{props.subs} subscribers · {props.noofvideos} videos</p>
           <p>{props.description}</p>
       </div>
    </div>
  )
}

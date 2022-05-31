
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';
//es7 snippette
export const Header = () => {
    const [inputsearch,setInputsearch]=useState('');
    
    return (
        <div className='header'>
           <div className="header_left">
           <MenuIcon/>
           <Link to="/">
           <img 
            className='header_logo'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAozLqGUSYG7kk22-0PVVUhjBiq7jGc0mSZzIIaALmLoCM4W8KxjTAvoUY0Qn1sW1UONQ&usqp=CAU" alt=""/>
           </Link>
           
           </div>
           <div className="header_input">
           <input 
           onChange={e=>setInputsearch(e.target.value)}
           value={inputsearch}
           placeholder="Search" type="text" />
         <Link to={`/search/${inputsearch}`}>
         <SearchIcon className='header_inputButton'/>
         </Link>
         
           </div>
       <div className="header_icons">
       <VideoCallIcon className='header_icon'/>
        <AppsIcon className='header_icon'/>
        <NotificationsIcon className='header_icon'/>
        <Avatar
        alt="Manoj Badiger"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0fMUL7CLx8uX7XtqFB9Qbbp9jJJxbrHzYEnC7pvPElmj7ZV3GIWSo-b-seD8hgsRVFM&usqp=CAU"
        />
       </div>
       
        </div>
    )
}
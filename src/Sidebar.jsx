import React from 'react'
import './Sidebar.css'
import { Sidebarrow } from './Sidebarrow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Sidebarrow selected Icon={HomeIcon} title="Home"/>
      <Sidebarrow Icon={WhatshotIcon}title="Treding"/>
      <Sidebarrow Icon={SubscriptionsIcon} title="Subscription"/>
       <hr />
       <Sidebarrow  Icon={VideoLibraryIcon} title="Library"/>
      <Sidebarrow Icon={HistoryIcon}title="History"/>
      <Sidebarrow Icon={OndemandVideoIcon} title="Your videos"/>
      <Sidebarrow  Icon={WatchLaterIcon} title="Watch Later"/>
      <Sidebarrow Icon={ThumbUpAltIcon}title="Liked video"/>
      <Sidebarrow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
    </div>
  )
}

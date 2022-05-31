
import React from 'react'

import './Sidebarrow.css'
export const Sidebarrow = ({selected,Icon,title}) => {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h2 className='sidebarRow_title'>{title}</h2>

        </div>
    )
}
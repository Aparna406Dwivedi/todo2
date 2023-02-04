import React from 'react'

export default function SideNav(props) {
  return (
    <ul className='side-nav'>
      <ol>
      <li onClick={()=>{props.change("INBOX")}}>
        <div style={{color:"blue"}}><u>INBOX</u></div>
      </li>
      <li onClick={()=>{props.change("TODAY")}}>
        <div style={{color:'blue'}}><u>TODAY</u></div>
      </li>
      <li onClick={()=>{props.change("NEXT")}}>
        <div style={{color:"blue"}}><u>NEXT 7 DAYS</u></div>
      </li>
      </ol>
    </ul>
  )
}
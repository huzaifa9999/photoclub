import React from 'react'
import Noticenew from "./Noticenew"
import "./notice.css"
export default function Notice() {
  return (
    <>
        <div className="noticemain">
        <h1 id='event'>Events and News</h1>
<Noticenew month="September"/>
<Noticenew month="October"/>
<Noticenew month="November"/>
        </div>
    </>
  )
}

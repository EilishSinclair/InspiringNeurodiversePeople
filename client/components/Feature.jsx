import React from 'react'

export default function Feature (props) {
  return (
    <div>
      {props.DFYouth.name}
      <a href={props.DFYouth.link}>Links</a>
      <img src={props.DFYouth.img} />
      {props.DFYouth.blurb}
    </div>
  )
}
// Click <a href="http://www.yahoo.com">here</a> to go to yahoo.
//  url of the person's image: {props.DFYouth.img}

// I have added the link tag to show up on page
// I have added the img tag to show up on page

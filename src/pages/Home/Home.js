import React from 'react'
import Navbar from '../../componets/Navigation/Navbar'
import LeftPane from '../../componets/LeftPane/LeftPane'
import PostPane from '../../componets/PostPane/PostPane'
import RightPane from '../../componets/RightPane/RightPane'
import "./home.css";



export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="botomContainer">
    <LeftPane/>
    <PostPane/>
    <RightPane/>
    </div>
    </>

  )
}

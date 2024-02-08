import React from 'react'
import "./postPane.css"
import AddPosts from '../AddPosts/AddPosts'
import Post from '../Post/Post'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPosts/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  )
}

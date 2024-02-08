import React from 'react'
import "./addPosts.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPosts() {
  return (
    <div className='addPost'>
      <div className="addPostContainer">
          <div className="addPostTop">
              <img src="/images/1.avif" alt="" className="addPostPic" />
              <input placeholder='Whats in your mind....?'type="text" className="addPostInput" />
          </div>
          <hr className='postHr'/>
          <div className="addPostBottom">
            <div className="addPostOptions">
            <div className="addPostOption">
                <InsertPhotoIcon htmlColor='orange' className='addphoto'/>
                <span className="addPostOptionText">Add photo/Video</span>
            </div>
            <div className="addPostOption">
                < AddLocationAltIcon htmlColor='red'className='addphoto'/>
                <span className="addPostOptionText">Add Location</span>
            </div>
            <div className="addPostOption">
                <LocalOfferIcon htmlColor='blue'className='addphoto'/>
                <span className="addPostOptionText">Tag </span>
            </div>
            <div className="addPostOption">
                < LiveTvIcon htmlColor='tomato'className='addphoto'/>
                <span className="addPostOptionText">Go live</span>
            </div>
            </div>
                <button className="PostButton">Post</button>
          </div>
      </div>
    </div>
  )
}

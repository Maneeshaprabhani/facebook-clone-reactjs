import React from 'react'
import "./post.css"
export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
    
                <img src="/images/image.jpeg" alt="" className="postImage" />
                <span className="postUserName">Keli Annn</span>
                <span className="postTime">5 minitues ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                Chasing dreams and catching smiles along the way... 🌟🌈🚀
                </div>
                <img src="/images/pexels-juliana-stein-1898555.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottmleft">
                    <img src="/images/image.jpeg" alt="" className="reaction" />
                    <img src="/images/image2.png" alt="" className="reaction" />
                    <img src="/images/image3.png" alt="" className="reaction" />
                    <span className="likecount">Maneesha and 750 others</span>
                </div>
                <div className="postBottmRight">
                    <span className="commentCount">
                        680 comments
                    </span>
                </div>
            </div>
        </div>
    </div>

    
  )
}

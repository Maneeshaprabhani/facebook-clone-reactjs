import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsored</span>
          <img src="/images/new-arrivals-summer-collection-facebook-shop-design-template-675021b8223ac942ae1d3254a51589e4_screen.jpg" alt="" className="addImage" />
          <sapn className="addText">
          "Step up your fashion game! Discover our latest girls' collection now. 💃 #ShopNow"
          </sapn>
        </div>
        <div className="adContainer">
          <img src="/images/new-collection-fashion-sale-social-media-ad-t-design-template-ad1bd52c15417b89753ad4fd6ff4f867_screen.jpg" alt="" className="addImage" />
          <sapn className="addText">
          "Upgrade your style! Explore our latest men's collection now. 👔 #ShopNow"
        </sapn>
        </div>
        <div className="birthdayContainer">
          <img src="/images/images.jpg" alt="" className="birthhdayImage" />
          <span className="birthdayText">
            <b>Ayun Krishmal</b>  and <b>2 others</b> having birthday today...!
             </span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/men.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Ayun Krishmal</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/11.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Sahan Kan</span>
          </li>
          
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/a.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Tom Jason</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/17.avif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Sayuni Anuthara</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/15.jpg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Maneesha Prabhani</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/photo-1617113930975-f9c7243ae527.avif" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Seny ken</span>
          </li>
        </div>
      </div>
      </div>
  )
}

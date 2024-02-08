import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
    <div className="leftPaneContainer">
      <div className="leftPaneMenu">
        <li className='leftPaneMenuItem'>
           <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Messages</span>
        </li>
        <li className='leftPaneMenuItem'>
           <GroupIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Groups</span>
        </li>
        <li className='leftPaneMenuItem'>
           <RssFeedIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Feed</span>
        </li>
        <li className='leftPaneMenuItem'>
           <FlagIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Pages</span>
        </li>
        <li className='leftPaneMenuItem'>
           <CalendarMonthIcon  className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Events</span>
        </li>
        <li className='leftPaneMenuItem'>
           <BuildIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Settings</span>
        </li>
        <li className='leftPaneMenuItem'>
           <SportsEsportsIcon  className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Games</span>
        </li>
        <li className='leftPaneMenuItem'>
           <NewspaperIcon  className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">News</span>
        </li>
        <li className='leftPaneMenuItem'>
           <WorkOutlineIcon className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Jobs</span>
        </li>
        <li className='leftPaneMenuItem'>
           <AddShoppingCartIcon  className='leftPaneMenuIcon'/>
           <span className="leftPaneMenuText">Market</span>
        </li>
        <hr/>
        <div className="pagesYouLiked">
          <h3>Pages You Liked</h3>
        </div>
       <div className="pageList">
       <li className="pagesListItem">
          <img src="/images/download.jpg" alt="" className="pagePic" />
          <span className="PageName"> Prabha Photography</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/images (2).jpg" alt="" className="pagePic" />
          <span className="PageName">Nature Lovers</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/22.jpg" alt="" className="pagePic" />
          <span className="PageName"> SriLanka</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/729244330.webp" alt="" className="pagePic" />
          <span className="PageName"> Travel with Wife</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/download (1).jpg" alt="" className="pagePic" />
          <span className="PageName"> Al/Chemistry</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/download (2).jpg" alt="" className="pagePic" />
          <span className="PageName">Waterfalls</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/3768.webp" alt="" className="pagePic" />
          <span className="PageName">SL Cricket</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/b.jpg" alt="" className="pagePic" />
          <span className="PageName">Beach Lovers</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/Moon_in_Sunrise_Sky_2.jpg" alt="" className="pagePic" />
          <span className="PageName">Sky Lovers</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/photo-1594070319944-7c0cbebb6f58.avif" alt="" className="pagePic" />
          <span className="PageName">Civic</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/e.jpg" alt="" className="pagePic" />
          <span className="PageName">Esoft Metro Campus</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/d.jpg" alt="" className="pagePic" />
          <span className="PageName">Dog Lovers</span>
        </li>
        <li className="pagesListItem">
          <img src="/images/eng.jpg" alt="" className="pagePic" />
          <span className="PageName">English With Prabha</span>
        </li>
       </div>
      </div>
    </div>
    </div>
  )
}

import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      {/*Twitter Icon*/}
      <TwitterIcon className="sidebar_twitterIcon"/>
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={ExploreIcon} text="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} text="Lists"/>
      <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOptions Icon={MoreHorizIcon} text="More"/>

      {/*Button -> Tweet*/}
      <Button varient="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;

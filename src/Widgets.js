import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1683378289031761920"} />
        
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FabrizioRomano"
          options={{ height: 600 }}
        />

        <TwitterShareButton 
        url={"https://tcano0505.github.io/milestone3/"}
        options = {{text: "Come check out my #portfolio !", via: "TommyCano7"}}
        />
      </div>
    </div>
  );
}

export default Widgets;

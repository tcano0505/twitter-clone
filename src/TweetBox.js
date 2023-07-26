import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault(); //stops refresh on each tweet

    db.collection("posts").add({
      displayName: "Tommy Cano",
      username: "t.c3",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.licdn.com/dms/image/D4E35AQElMRUqE6wKHQ/profile-framedphoto-shrink_200_200/0/1665345559673?e=1690862400&v=beta&t=aEOqUL7EJGH5znSTKRIO-Y9694T2wjV4WUrE_3mHs2Q",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://media.licdn.com/dms/image/D4E35AQElMRUqE6wKHQ/profile-framedphoto-shrink_200_200/0/1665345559673?e=1690862400&v=beta&t=aEOqUL7EJGH5znSTKRIO-Y9694T2wjV4WUrE_3mHs2Q"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's on your mind?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL (Optional)"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox_tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

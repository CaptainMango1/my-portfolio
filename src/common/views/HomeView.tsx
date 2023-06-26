import React from "react";
import "../styles/homeview.css";
import main_image from "../assets/images/code-main-page.svg";
import discord_image from "../assets/images/discord.png";
import github_image from "../assets/images/github.png";
import spotigy_image from "../assets/images/spotify.png";
import twitter_image from "../assets/images/twitter.png";

const HomewView = () => {
  return (
    <div>
      <div className="header">
        <h1>Hello! I am Lukas.</h1>
        {/* <img src={main_image} className="main-image" alt="image" width={400} /> */}
      </div>
      <div className="social-images-container">
        <a href="https://discord.com/users/604793540395925536" target="_blank">
          <img
            src={discord_image}
            className="social-image"
            alt="image"
            width={60}
          />
        </a>

        <a href="https://github.com/CaptainMango1" target="_blank">
          <img
            src={github_image}
            className="social-image"
            alt="image"
            width={60}
          />
        </a>

        <a
          href="https://open.spotify.com/user/dse51hwu8lme3vk57ur8h2zy5"
          target="_blank"
        >
          <img
            src={spotigy_image}
            className="social-image"
            alt="image"
            width={60}
          />
        </a>
        <a href="https://twitter.com/mangoeis01" target="_blank">
          <img
            src={twitter_image}
            className="social-image"
            alt="image"
            width={60}
          />
        </a>
      </div>
    </div>
  );
};

export default HomewView;

import styled from "styled-components";

export const VideoPlayerContainer = styled.div<{ opacity: number }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  //https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
  height: -webkit-fill-available;
  background-color: black;
  
  .videoPlayer-preparation {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    font-size: 4rem;
  }
  
  video {
    width: 100%;
    height: 100vh;
    max-height: 100%;
    object-fit: cover;
  }
  
  mux-video {
    --controls: none;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    object-fit: cover;
  }

  mux-player {
    --controls: none;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    object-fit: cover;
  }
  
  /* video::-webkit-media-controls-start-playback-button {
    display: none !important;
  } */

  .videoPlayer-content {
    object-fit: cover;
    z-index: 3;
    background: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;

    .videoPlayer-top {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      justify-content: center;

      .swipe-action-icon {
        opacity: ${({ opacity }) => opacity};
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #525252;

        .swipe-action-icon-top {
          font-size: 4rem;
        }
        .swipe-action-icon-bottom {
          font-size: 2rem;
          top: 1em;
          position: absolute;
        }

        polygon {
          fill: white;
        }
      }

      .videoPlayer-top-close {
        cursor: pointer;
        color: #525252;
        margin-top: 1em;
        margin-left: 1em;
        z-index: 4;
        opacity: ${({ opacity }) => opacity};

        svg {
          font-size: 4rem;
        }
      }

      .videoPlayer-pay-icon {
        cursor: pointer;
        margin-right: 1em;
        margin-top: 1em;
        background-color: black;
        height: 1.5em;
        border-radius: 10px;
        padding-left: 0.35em;
        padding-right: 0.35em;
        padding-bottom: 0.2em;
        img {
          height: 1.8em;
          object-fit: scale-down;
        }
      }
    }

    .video-player-middle {
      padding-right: -0.6em;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      opacity: 0.15;
      font-size: 7em;

      polygon {
        fill: white;
      }

      .video-player-middle-left {
        margin-left: -0.15em;
      }

      .video-player-middle-right {
        margin-right: -0.15em;
      }
    }
    
    .videoPlayer-bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .swipe-action-icon-bottom {
        opacity: ${({ opacity }) => opacity};
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: white;

        .swipe-action-icon-top {
          position: absolute;
          font-size: 2rem;
          bottom: 1.4em;
        }
        .swipe-action-icon-bottom {
          font-size: 4rem;

        }

        polygon {
          fill: white;
        }
      }

      .videoPlayer-mute-icon {
        opacity: ${({ opacity }) => opacity};
        background-color: #525252;
        border-radius: 50px;
        z-index: 5;
        cursor: pointer;
        margin-right: 1em;
        margin-bottom: 1.5em;
        padding: 0.2em 0.2em 0em;

        svg {
          font-size: 4rem;
          margin: 0 auto;
        }
      }
    }
  }
`;

import { useNavigate } from "react-router";
import { VideoInfo } from '../../util/api/types';

import "./VideoThumbnail.styles.scss";

type VideoThumbnailProps = {
  video: VideoInfo;
};

const VideoThumbnail = ({ video }: VideoThumbnailProps) => {
  const navigate = useNavigate();

  const watchVideo = (vanityUrl: string) => {
    navigate(`/${vanityUrl}`);
  };

  const getVideoPreviewUrl = (video: VideoInfo) => {
    if (!video) {
      return "";
    }
    return `https://image.mux.com/${video.muxPlaybackId}/thumbnail.jpg?width=628&fit_mode=pad&time=1.1511500000000001`;
  };

  return (
    <div className="thumbnail">
      <img
        src={getVideoPreviewUrl(video)}
        onClick={() => watchVideo(video.id)}
        alt={"video thumbnail"}
      />
    </div>
  );
};

export default VideoThumbnail;

import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
import { FcCollapse } from "react-icons/fc";
import { VideoUploadDiv } from "./VideoUpload.styles";

import "react-dropzone-uploader/dist/styles.css";
import "/node_modules/video-react/dist/video-react.css";
import { useEffect, useState } from "react";

const VideoUpload = () => {
  const [opaque, setOpaque] = useState(0.5);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedDown: (eventData) => navigate("/home/"),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    setTimeout(function () {
      setOpaque(0);
    }, 3000);
  }, []);

  return (
    <VideoUploadDiv opacity={opaque} {...handlers}>
      <div className="upload-icon">
        <AiOutlinePlus />
      </div>
      <div></div>
    </VideoUploadDiv>
  );
};

export default VideoUpload;

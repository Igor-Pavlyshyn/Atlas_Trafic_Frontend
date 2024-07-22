import { useLayoutEffect, useState } from "react";
import ComponentModal from "../ComponentModal";
import Camera from "../../assets/camera_view.png";

import Video from "../Map/Video";

const CameraView = () => {
  const [id, setId] = useState<string | null>(null);

  useLayoutEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setId(id);
    };

    window.addEventListener("popstate", handlePopState);

    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <ComponentModal title="View" padding={false} seeMore height={200}>
      {id ? <Video /> : <img src={Camera} alt="view" />}
    </ComponentModal>
  );
};

export default CameraView;

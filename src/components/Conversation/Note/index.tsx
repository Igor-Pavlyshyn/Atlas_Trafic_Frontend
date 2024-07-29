import { BlackBorderedSpace } from "../../BlackBorderedSpace";
import Pencil from "../../../assets/Pencil.svg";
import UploadPhoto from "../../../assets/conversation/upload.svg";

import styles from "./style.module.scss";
import { DragEvent, useCallback, useState } from "react";

const Note = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed.");
        return;
      }
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <BlackBorderedSpace title="New Note" width={211} height={58}>
      <div className={styles.container}>
        <div className={styles.container_firstRow}>
          <div>Title</div>
          <img src={Pencil} alt="Pencil" width={16} height={16} />
        </div>
        <div className={styles.container_secondRow}>
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
            Upload picture
          </div>
          <img src={UploadPhoto} alt="Upload Photo" width={16} height={16} />
        </div>
      </div>
    </BlackBorderedSpace>
  );
};

export default Note;

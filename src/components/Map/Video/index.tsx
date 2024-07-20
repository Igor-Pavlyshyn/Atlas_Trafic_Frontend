import Frame from "../../../assets/videos/view_size.mp4";

type Props = {
  clickHandler: (id: string) => void;
};

const Video = ({ clickHandler }: Props) => {
  return (
    <div onClick={() => clickHandler("")}>
      <video autoPlay playsInline muted loop>
        <source src={Frame} />
      </video>
    </div>
  );
};

export default Video;

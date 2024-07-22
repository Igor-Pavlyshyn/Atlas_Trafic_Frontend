import Frame from "../../../assets/videos/view_size_small.mp4";

const Video = () => {
  return (
    <div>
      <video
        autoPlay
        playsInline
        muted
        loop
        style={{
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        <source src={Frame} />
      </video>
    </div>
  );
};

export default Video;

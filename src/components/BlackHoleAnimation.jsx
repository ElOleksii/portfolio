import Video from "../public/blackhole.webm";
const BlackHoleAnimation = () => {
  return (
    <video
      src={Video}
      autoPlay
      muted
      loop
      className="w-full video z-[0] absolute top-1/2 left-1/2 transform -translate-x-1/2 xl:-translate-y-1/2 md:-translate-y-0  z-[1] h-[100vh] object-cover"
    ></video>
  );
};

export default BlackHoleAnimation;

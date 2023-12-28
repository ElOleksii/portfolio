import Video from "../public/blackhole.webm";

export default function FullScreenHeader() {
  return (
    <div className="container bg-black min-w-full">
      <div className=" pl-24 w-[550px]  min-h-screen text-white  ">
        <div className="flex flex-col min-h-[100vh] justify-around text-2xl">
          <p>Oleksii Telecnhak</p>
          <h1 className="font-medium text-5xl">Front End Developer</h1>
          <p>Click for more</p>
        </div>

        <video
          src={Video}
          autoPlay
          muted
          loop
          className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] max-h-[100vh] object-cover mix-blend-screen"
        ></video>
      </div>
    </div>
  );
}

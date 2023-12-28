import Video from "../public/blackhole.webm";
import { FaArrowDown } from "react-icons/fa";
export default function FullScreenHeader() {
  return (
    <div className="container bg-black min-w-full">
      <div className=" pl-24 w-[550px]  min-h-screen text-white  ">
        <div className="flex flex-col min-h-[100vh] justify-center text-2xl z-10  relative">
          <p className="mt-14">Oleksii Telecnhak</p>
          <h1 className="font-medium text-5xl my-10">Front End Developer</h1>
          <div className="w-[300px]">
            <p>Click for more</p>
            <div className="mx-auto mt-5 inline-block">
              <button className="cursor-pointer  flex items-center justify-center w-12 h-12 border-2 border-white rounded-full transition-all hover:scale-110 hover:opacity-80">
                <FaArrowDown />
              </button>
            </div>
          </div>
        </div>

        <video
          src={Video}
          autoPlay
          muted
          loop
          className="w-full z-[0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] h-[100vh] object-cover mix-blend-screen"
        ></video>
      </div>
    </div>
  );
}

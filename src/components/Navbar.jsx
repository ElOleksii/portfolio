import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }
  return (
    <>
      <nav className="w-full  h-[65px] fixed top-0 shadow-lg  backdrop-blur-md z-[110]   px-10">
        <div
          style={{ display: isOpen ? "flex" : "none" }}
          className="fixed text-xl sm:text-md top-0 bg-black bg-opacity-95 right-0 h-screen w-full backdrop-blur-[10px] flex flex-col items-center  justify-start  text-gray-200"
        >
          <div className="flex my-[15px]   px-[10px] justify-end w-full items-center">
            <IoMdClose
              size={35}
              onClick={closeMenu}
              className="cursor-pointer"
            />
          </div>

          <a
            href="#about-me"
            onClick={closeMenu}
            className="cursor-pointer py-[15px] px-[10px] hover:scale-110  duration-150"
          >
            About me
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="cursor-pointer py-[15px] px-[10px] hover:scale-110  duration-150"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="cursor-pointer py-[15px] px-[10px] hover:scale-110 duration-150"
          >
            Projects
          </a>
        </div>

        <div className="w-full md:hidden h-full flex text-lg 2md:text-base flex-row items-center justify-between z-[105] m-auto px-[10px]">
          <a
            href="#fullscreen"
            className="h-auto hover:scale-110  duration-150  w-auto cursor-pointer flex flex-row items-center"
          >
            <span className=" ml-[10px]  md:block">Oleksii Telenchak</span>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto    mr-[15px] px-[20px] py-[10px] text-gray-200">
              <a
                href="#about-me"
                className="cursor-pointer hover:scale-110  duration-150"
              >
                About me
              </a>
              <a
                href="#skills"
                className="cursor-pointer hover:scale-110  duration-150"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="cursor-pointer hover:scale-110 duration-150"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex relative top-[15px] left-[20px] justify-end">
          {!isOpen && (
            <IoMdMenu
              className="cursor-pointer "
              size={35}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

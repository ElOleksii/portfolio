const Navbar = () => {
  return (
    <navbar className="w-full md:hidden h-[65px] fixed top-0 shadow-lg  backdrop-blur-md z-[110]  px-10">
      <div className="w-full h-full flex flex-row items-center justify-between z-[105] m-auto px-[10px]">
        <a
          href="#fullscreen"
          className="h-auto  w-auto cursor-pointer flex flex-row items-center"
        >
          <span className=" ml-[10px]  md:block">Telenchak Oleksii</span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto   mr-[15px] px-[20px] py-[10px] text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;

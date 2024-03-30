import React from "react";
import Image from "next/image";
import Noorulhuda from "../assets/noorulhuda.jpg";

import MenuComponent from "./menuComponent";

const MainMenu = () => {
  const MenuList = ["Home", "Gallery", "Madrasa", "contact Us"];

  return (
    <div className="flex justify-between items-center px-14 bg-white text-blue-900">
      <Image src={Noorulhuda} width={300} height={300} alt="NoorulHuda"></Image>
      <MenuComponent Menu={MenuList}></MenuComponent>
    </div>
  );
};

export default MainMenu;

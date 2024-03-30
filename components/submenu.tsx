import React from "react";

import Link from "next/link";
import MenuComponent from "./menuComponent";

const SubMenu = () => {
  const subMenu = ["Faculty", "Students", "Managing Committee"];

  return (
    <div className="flex justify-between  px-28	 py-3 bg-blue-900 text-white">
      <MenuComponent Menu={subMenu}></MenuComponent>
      <Link href={"/donate"}>
        <div>Donate Us</div>
      </Link>
    </div>
  );
};

export default SubMenu;

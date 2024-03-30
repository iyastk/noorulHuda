import React from "react";
import Link from "next/link";
import { createUrl } from "@/lib/controls";
const MenuComponent = (props: { Menu: any }) => {
  const Menu = props.Menu;
  return (
    <ul className="flex gap-4 justify-center align-middle">
      {Menu.map((el: any, i: number) => {
        return (
          <Link href={`/${createUrl(el)}`} key={i}>
            <li>{el}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuComponent;

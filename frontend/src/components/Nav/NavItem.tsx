import React from "react";

import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  to: string;
  icon: any;
};

export default function NavItem({ title, to, icon: Icon }: Props) {
  return (
    <li className="flex gap-4 items-center justify-center w-full rounded-sm">
      <NavLink
        to={to}
        className={({ isActive }) =>
          // passing a prop to check if we are at current url path
          isActive
            ? "flex gap-4 items-center w-full text-xl px-2  rounded-md bg-[#ffec99]"
            : "flex gap-4 items-center w-full text-xl px-2 rounded-md"
        }
      >
        <Icon className="text-xl " />
        {title}
      </NavLink>
    </li>
  );
}

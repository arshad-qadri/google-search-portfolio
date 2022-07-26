import Image from "next/image";
import React from "react";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li className="link-item">
          <a href="#">Gmail</a>
        </li>
        <li className="link-item">
          <a href="#">Images</a>
        </li>
        <li>
          <a href="#" className="icon">
            <TbGridDots />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              className="profile"
              src={
                "https://lh3.googleusercontent.com/ogw/AOh-ky2P2Z6elCjLfVlgOk-pVwrQhkyY1W2wbxbaj-ZsWA=s32-c-mo"
              }
              width={32}
              height={32}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import React from "react";
import style from "./Wrapper.module.sass";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cn from "classnames";

function Wrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link className={style.logo} to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Logo"
            className={style.image}
          />
          <div className={style.text_logo}>Virtual Porcelain Gallery</div>
        </Link>
        <div className={style.separator} />
        <Link
          className={cn(
            style.navigate,
            location.pathname === "/figures" && style.current
          )}
          to={"/figures"}
        >
          <div className={style.text}>Figures List</div>
        </Link>
        <div className={style.separator} />
        <Link
          className={cn(
            style.navigate,
            location.pathname === "/contact" && style.current
          )}
          to={"/contact"}
        >
          <div className={style.text}>Contact Us</div>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default Wrapper;

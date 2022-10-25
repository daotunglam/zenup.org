import React from "react";
import "./BtnMenu.scss";
import clsx from "clsx";


export default function BtnMenu({ toggleNavbar, NavbarOpened }) {
  return (
    <div
      className={clsx('wrapperMenu', NavbarOpened && 'opened')}
      onClick={() => { toggleNavbar() }}
    >
      <div className="line-menu half start" />
      <div className="line-menu" />
      <div className="line-menu half end" />
    </div>
  )

}

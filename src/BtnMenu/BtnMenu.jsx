import React from "react";
import "./BtnMenu.scss";

export default function BtnMenu({toggleNavbar}) {
  return (
    <div
      className='hamburgerBtn'
      onClick={() => { toggleNavbar() }}
    >
      <img src='imgs/hamburgerBtn.png' alt="hamburgerBtn" />
    </div>
  )

}

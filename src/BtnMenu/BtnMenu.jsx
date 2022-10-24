import React, { useState } from "react";
import "./BtnMenu.scss";

export default function BtnMenu() {
  const [isOpened, setOPen] = useState(false);

  const transformBtnMenu = () => {
    setOPen(!isOpened)
  };

  const wrapperMenuClass = 'wrapperMenu' + (isOpened ? ' open' : ''); 

  return (
    <div className={wrapperMenuClass} onClick={transformBtnMenu}>
      <div className="line-menu half start" />
      <div className="line-menu" />
      <div className="line-menu half end" />
    </div>
  )

}

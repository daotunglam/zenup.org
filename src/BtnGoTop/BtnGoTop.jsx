import "./BtnGoTop.scss";
import { useState, useEffect } from "react";

export default function BtnGoTop() {
    const [isShowed, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setShow(window.scrollY > 200))

        return () => {
            window.removeEventListener('scroll', () => setShow(window.scrollY > 200))
        }
    }, [])

    return <>
        {isShowed &&
            <div className="BtnGoTop">
                <div className="arrowLine left"></div>
                <div className="arrowLine right"></div>
            </div>
        }
    </>
}
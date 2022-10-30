import "./BtnGoTop.scss";
import { useState, useEffect } from "react";

export default function BtnGoTop() {
    const [isShowed, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setShow(window.scrollY > 800))

        return () => {
            window.removeEventListener('scroll', () => setShow(window.scrollY > 800))
        }
    }, [])
    function goTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return <>
        {isShowed &&
            <div className="BtnGoTop" onClick={goTop}>
                <div className="arrowLine left"></div>
                <div className="arrowLine right"></div>
            </div>
        }
    </>
}
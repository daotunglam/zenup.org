import React from "react";
import { Link } from "react-router-dom";
import './section.scss';

export default function SectionMenu() {
    const menuDemo = [
        {
            name: 'MISO',
            subname: 'mit Tofu, Seetang, Lauchzwiebeln und Miso',
        },
        {
            name: 'KAISEN BOWL',
            subname: 'gemischer roher Fisch auf Sushireis mit Avocado, Cherrytomaten, Surimi, marinierten Pilzen, Tobiko und Wildkräutersalat',
        },
        {
            name: 'RAINBOW',
            subname: 'Garnelen im Tempuramantel, Fischkäse, Avokado und Aal, bedeckt mit Lachs, Thunfisch und Kingfisch',
        },
        {
            name: 'XENG',
            subname: '6 Stck. Nigiri, 6 Stck. Sashimi, Geiko und Ninja Prawns',
        },
        {
            name: 'MOCHI MIX',
            subname: 'in drei Geschmacksrichtungen',
        },
        {
            name: 'HOMEMADE STRAWBERRY MINT LEMONADE',
            subname: 'Erdbeere, Minze, Soda',
        },
    ]

    const renderMenuDemo = menuDemo.map((item, i) =>
        <div className="menuItem" key={i}>
            <div className="name">{item.name}</div>
            <div className="subname">
                {item.subname}
            </div>
        </div>
    )


    return <>
        <div className="SectionMenu">
            <div className="title">Unser Menü</div>
            <div className="menu">
                {renderMenuDemo}
            </div>
            <div className="link">
                <Link to="/menu" >unser Menü ansehen</Link>
            </div>
        </div>
    </>
}
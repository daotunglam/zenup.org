import { useState } from 'react';
import { Link } from 'react-router-dom';
import M from './Categories.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import clsx from 'clsx';

export default function Categories() {
    const { width } = useWindowDimensions();
    const isPhone = width <= 768;

    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            id: 0,
            background: 'imgs/Categories/background_1.png',
            route: '/zenup-workshops',
            title: 'Zenup Workshops',
            imgSrc: 'imgs/Categories/zenupWorkshops.png',
        },
        {
            id: 1,
            background: 'imgs/Categories/background_2.png',
            route: '/zen-journaling',
            title: 'Zen-Journaling',
            imgSrc: 'imgs/Categories/zenJournaling.png',
        },
        {
            id: 2,
            background: 'imgs/Categories/background_3.png',
            route: '/zenup-lifestyles',
            title: 'Zenup Lifestyles',
            imgSrc: 'imgs/Categories/zenupLifestyles.png',
        },
        {
            id: 3,
            background: 'imgs/Categories/background_4.png',
            route: '/mindfulness-exercises',
            title: 'Mindfulness Exercises',
            imgSrc: 'imgs/Categories/mindfulnessExercises.png',
        },
        {
            id: 4,
            background: 'imgs/Categories/background_5.png',
            route: '/zen-merchandise',
            title: 'Zen Merchandise',
            imgSrc: 'imgs/Categories/zenMerchandise.png',
        },
    ];

    return (
        <>
            {isPhone ? (
                <div className={clsx(M.phone, M.scrollSnapVerticalContainer)}>
                    <div className={M.background} />

                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            className={clsx(
                                M.scrollSection,
                                M.snapItem,
                                { [M.active]: (activeSection === section.id) }
                            )}
                            to={section.route}
                            onClick={() => setActiveSection(section.id)}
                        >
                            <img src={section.imgSrc} alt={section.title} />
                            <div className={M.title}>{section.title}</div>
                        </Link>
                    ))}
                </div >
            ) : (
                <div className={M.desktop}>
                    <div className={M.background} />

                    <div className={M.contentBox}>

                        <div className={M.box}>
                            {sections.map((section) => (
                                <Link
                                    key={section.id}
                                    className={M.column}
                                    to={section.route}
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    <img
                                        className={M.background}
                                        src={section.background}
                                        alt={`background ${section.title}`}
                                    />

                                    <div className={clsx(M.content, M.dropAndBound)}>
                                        <img src={section.imgSrc} alt={section.title} />
                                        <div className={M.title}>{section.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}

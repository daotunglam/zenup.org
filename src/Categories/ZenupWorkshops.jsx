import M from './Category.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import CategoryHeader from './CategoryHeader';
import BoxImgText from '../BoxImgText/BoxImgText';

export default function ZenupWorkshops() {
    const { width } = useWindowDimensions();
    const isTablet = width <= 768;
    const isPhone = width <= 480;

    return (
        <div>
            <div className={M.bgImg} />

            <div className={M.contentBox}>
                <CategoryHeader
                    title='Zenup Workshops'
                    imgFolder='ZenupWorkshops'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenupWorkshops/descriptionBackground.png"
                        title=""
                        paragraph={
                            <>
                                <p>
                                    Welcome to Zenup Workshops, where we offer a variety of programs to help individuals and companies cultivate a deeper sense of inner peace, clarity, and focus.
                                </p>
                                <p>
                                    Our workshops are designed to introduce participants to the principles of Zen and mindfulness focussed on Self Awareness practice, and to provide them with the tools and techniques they need to develop a regular meditation practice applied in daily activities.
                                </p>
                                <p>
                                    We offer two types of workshops: individual and company.
                                </p>
                                <p>
                                    Our individual workshops are perfect for those who want to deepen their personal practice of Zen and mindfulness. Our expert instructors will guide you through a variety of meditation techniques, helping you to cultivate greater awareness, concentration, and relaxation.
                                </p>
                                <p>
                                    For companies looking to promote a healthier and more productive workplace, we offer a range of corporate mindfulness workshops. Our programs are designed to help employees reduce stress, increase focus and creativity, and improve overall well-being. Our experienced instructors will work with your team to create a customized program that meets the specific needs of your organization.
                                    Whether you are looking to deepen your personal practice or create a more mindful workplace, our Zen and Mindfulness Workshops are here to support you on your journey. We invite you to explore our programs and discover the benefits of mindfulness for yourself.
                                </p>
                            </>
                        }
                        imageFloat='left'
                    />
                </div>

            </div>
        </div>
    )
}

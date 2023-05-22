import M from './Category.module.scss';
import CategoryHeader from './CategoryHeader';
import BoxImgText from '../BoxImgText/BoxImgText';

export default function ZenupLifestyles() {

    return (
        <div>
            <div className={M.bgImg} />

            <div className={M.contentBox}>
                <CategoryHeader
                    title='Zenup Lifestyles'
                    imgFolder='ZenupLifestyles'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenupLifestyles/descriptionBackground.png"
                        title=""
                        paragraph={
                            <>
                                <p>
                                    We believe that surrounding yourself with calming and uplifting objects can help enhance your mindfulness practice. In our Zen Merchandise section, you will find a selection of items designed to bring peace and tranquility to your daily life. From candles to incense to meditation cushions, we have everything you need to create a peaceful and mindful space.
                                </p>
                                <p>
                                    Our Zen Merchandise is carefully curated to help you create a calming and relaxing atmosphere in your home or workspace. We believe that by surrounding yourself with objects that inspire peace and tranquility, you can enhance your mindfulness practice and cultivate a greater sense of inner peace. Our products are sourced from ethical and sustainable suppliers, so you can feel good about your purchase and its impact on the environment.
                                </p>
                                <p>
                                    We hope that these resources will help you on your journey towards greater self-awareness and inner peace. Remember, mindfulness is a practice, and it takes time and dedication to cultivate. But with persistence and patience, you can transform your life and find greater happiness and fulfillment.
                                </p>
                                <p>
                                    Thank you for choosing Zenup as your guide on this journey. We are committed to providing you with the tools and resources you need to live a more mindful and fulfilling life.
                                </p>
                            </>
                        }
                        imageWidth='40%'
                        imageFloat='left'
                    />
                </div>

            </div>
        </div>
    )
}

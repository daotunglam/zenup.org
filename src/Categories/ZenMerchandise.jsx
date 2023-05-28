import M from './Category.module.scss';
import CategoryHeader from './CategoryHeader';
import BoxImgText from '../BoxImgText/BoxImgText';

export default function ZenMerchandise() {

    return (
        <div>
            <div className={M.bgImg} />
            <div className={M.contentBox}>
                <CategoryHeader
                    title="Sản phẩm khác"
                    imgFolder='ZenMerchandise'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenMerchandise/descriptionBackground.png"
                        paragraph={
                            <>
                                <p>
                                    Hãy cùng Zenup khám phá các sản phẩm thiền hữu ích để nâng cao thực hành sống thiền và tạo không gian yên bình trong cuộc sống hàng ngày!
                                </p>
                                <p>
                                    Chúng tôi đã sưu tầm và chọn lọc cẩn thận những sản phẩm đặc biệt sau quá trình thực hành từ chính các thành viên của Zenup, nhằm tạo ra một không gian tĩnh lặng và bình yên trong ngôi nhà và nơi làm việc của bạn.
                                </p>
                                <p>
                                    Chúng tôi tin rằng bằng cách bao quanh mình bằng những vật phẩm truyền cảm hứng về an bình và tĩnh lặng, bạn có thể tăng cường thực hành sống thiền và nuôi dưỡng cảm giác bình an nội tâm lớn hơn. Các sản phẩm này được lựa chọn từ các nhà cung cấp có đạo đức và chú trọng đến sự bền vững, để bạn có thể yên tâm về mua sắm của mình và tác động tích cực đến môi trường.
                                </p>
                                <p>
                                    Hy vọng rằng những nguồn sản phẩm này sẽ hỗ trợ bạn trên hành trình đạt đến sự tự nhận thức cao hơn và tràn đầy bình an nội tâm. Hãy nhớ rằng sống Thiền là một thực hành đòi hỏi thời gian và tâm huyết để trau dồi. Tuy nhiên, với sự kiên nhẫn và sự kiên trì, bạn có thể thay đổi cuộc sống của mình và tìm thấy hạnh phúc, bình an và sự thỏa mãn tuyệt vời hơn.
                                </p>
                                <p>
                                    Chúng tôi rất biết ơn bạn đã lựa chọn Zenup làm người đồng hành trong hành trình này. Chúng tôi cam kết cung cấp cho bạn các công cụ và tài nguyên cần thiết để sống một cuộc sống có ý thức và trọn vẹn hơn.
                                </p>
                            </>
                        }
                        imageWidth='100%'
                    />
                </div>
            </div>

            {/* 
            <div className={M.contentBox}>
                <CategoryHeader
                    title='Zen Merchandise'
                    imgFolder='ZenMerchandise'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenMerchandise/descriptionBackground.png"
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
                        imageWidth='100%'
                    />
                </div>

            </div> */}
        </div>
    )
}

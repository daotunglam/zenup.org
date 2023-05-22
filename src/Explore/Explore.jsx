import BoxImgText from '../BoxImgText/BoxImgText';
import M from './Explore.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Explore() {
    const { width } = useWindowDimensions();
    const isTablet = width <= 768;
    const isPhone = width <= 480;

    return (
        <div>

            <div className={M.bgImg}>
                {!isPhone &&
                    <div>
                        <img className={M.backgroundLeft} src='imgs/Explore/desktop/backgroundLeft.png' alt="background" />
                        <img className={M.backgroundRight} src='imgs/Explore/desktop/backgroundRight.png' alt="background" />
                    </div>
                }
            </div>

            <div className={M.contentBox}>

                <div className={M.header + ' ' + M.section} />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Explore/desktop/zenupLibrary.png"
                        title="Zenup Library"
                        paragraph={
                            <>
                                <p>
                                    Welcome to the Zenup Library, where you can find an extensive collection of resources and materials to help you deepen your understanding and practice of Zen.
                                </p>
                                <p>
                                    Our library boasts a diverse range of materials, including classic Zen texts, contemporary writings, guided meditations, and mindfulness exercises. Whether you are a newbie or a seasoned practitioner to Zen practice, our library has something for everyone.
                                </p>
                                <p>
                                    We invite you to explore our selection of books on Zen philosophy focused on Self-Awareness, teachings from Zen masters- Phap Nhat, and practical guides for meditation and mindfulness to raise our daily awareness.
                                    Additionally, we offer audio recordings of talks and lectures by a prominent Zen teacher- Phap Nhat, as well as guided meditations that can help you cultivate inner peace and clarity.
                                </p>
                            </>
                        }
                        imageFloat='right'
                    />
                </div>

                <div
                    className={
                        M.zenupGallery
                        + ' '
                        + M.section
                    }
                >

                    {isPhone ?
                        <div className={M.imgContainer}>
                            <img className={M.img5} src='imgs/Explore/desktop/zenupGallery_5.png' alt="zenupGallery" />
                            <img className={M.img2} src='imgs/Explore/desktop/zenupGallery_2.png' alt="zenupGallery" />
                            <img className={M.img4} src='imgs/Explore/desktop/zenupGallery_4.png' alt="zenupGallery" />
                            <img className={M.img3} src='imgs/Explore/desktop/zenupGallery_3.png' alt="zenupGallery" />
                        </div>
                        :
                        <div className={M.imgContainer}>
                            <img className={M.img1} src='imgs/Explore/desktop/zenupGallery_1.png' alt="zenupGallery" />
                            <img className={M.img2} src='imgs/Explore/desktop/zenupGallery_2.png' alt="zenupGallery" />
                            <img className={M.img3} src='imgs/Explore/desktop/zenupGallery_3.png' alt="zenupGallery" />
                            <img className={M.img4} src='imgs/Explore/desktop/zenupGallery_4.png' alt="zenupGallery" />
                            <img className={M.img5} src='imgs/Explore/desktop/zenupGallery_5.png' alt="zenupGallery" />
                        </div>
                    }

                    <div className={M.textContainer}>
                        <div className={M.title}>
                            Zenup Gallery
                        </div>

                        <div className={M.description}>
                            <p>
                                Our Zenup Library page also features a community forum where you can connect with other Zen practitioners and discuss your insights and questions. Our moderators are experienced practitioners who are available to offer guidance and support as you explore the Zen path.
                            </p>
                            <p>
                                Our library page is designed to support you in this journey, offering a wealth of resources and a community of like-minded individuals who share your commitment to personal growth and spiritual development. At Zenup, we believe that everyone has the capacity to cultivate mindfulness and inner peace.
                            </p>
                            <p>
                                Thank you for visiting our Zenup Library page and hope that you find our materials helpful on your path towards greater clarity, peace, and wisdom!
                            </p>
                        </div>
                    </div>
                </div>

                <div className={M.blogs}>
                    <div className={M.CTA_button}>Blogs</div>
                    <div className={M.description}>
                        Read more collected stories written by all people
                        <br />
                        who are willing to share their journeys
                    </div>
                </div>

            </div>
        </div>
    )
}

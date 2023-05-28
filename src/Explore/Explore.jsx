import BoxImgText from '../BoxImgText/BoxImgText';
import M from './Explore.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

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

                <div className={M.header + ' ' + M.section} >
                    {isPhone
                        ?
                        <div className={clsx(M.header, M.section, M.phone)} >
                            <div className={M.title}>
                                Chào mừng
                                <br />
                                bạn đến với
                                <br />
                                thư viện
                                <br />
                                Zenup
                            </div>

                            <img src="imgs/Explore/symbol.png" alt="symbol explore" />
                        </div>
                        :
                        <div className={clsx(M.header, M.section)} >
                            <div className={M.title}>
                                <span>Chào mừng bạn</span><img src="imgs/Explore/symbol.png" alt="symbol explore" />
                                <br />
                                <span>đến với thư viện Zenup</span>
                            </div>
                        </div>
                    }
                </div>

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Explore/desktop/zenupLibrary.png"
                        title="Sách hay là để đọc và để chia sẻ"
                        paragraph={
                            <>
                                <p>
                                    <i>“Vườn sách tỉnh thức cùng Zenup”</i>
                                </p>
                                <p>
                                    Trên chặng đường sống thiền, chúng ta không thể nào quên sự đồng hành của các bạn sách. Trong vườn sách xinh đẹp này, chúng mình sưu tầm và chọn lọc những tác phẩm và nguồn tư liệu hữu ích vô cùng trong hành trình thiền tập.
                                </p>
                                <p>
                                    Hãy cùng chúng tôi mở cánh cổng khu vườn này và khám phá sự thú vị bên trong, bạn đã sẵn sàng chưa?
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
                            Những  khoảnh khắc  ZEN
                        </div>

                        <div className={M.description}>
                            <p>
                            Chúng mình đã cùng đồng hành với nhau và nhiều bạn trẻ ở châu Âu trên hành trình sống thiền. Trong những giây phút đang là đó, chúng mình được sống trọng sự bình an hạnh phúc trọn vẹn, được cười nói được thảnh thơi, và được là chính mình. May mắn thay, những khoảnh khắc này đã được ghi lại dưới ống kính của một ai đó và nhờ vậy có thể đem ra chia sẻ tới mọi người.
                            </p>
                            <p>
                            Nào mình cùng vui vẻ cười, thảnh thơi vui sống và hạnh phúc là chính mình với Zenup nhé!
                            </p>
                        </div>
                    </div>
                </div>

                <div className={M.blogs}>
                <Link to='/zen-journaling' className={M.CTA_button}>Blogs</Link>
                    <div className={M.description}>
                        Read more collected stories written by all people
                        who are willing to share their journeys
                    </div>
                </div>

            </div>
        </div>
    )
}

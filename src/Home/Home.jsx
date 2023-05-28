import clsx from 'clsx';
import M from "./Home.module.scss";
import SectionJoinOurCommunity from "./Sections/SectionJoinOurCommunity";

import './Sections/section.scss';

import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 480;

  return (
    <>
      <div className={M.background}>

        <img className={clsx(
          M.bgImg, M.hoano,
          isTablet && M.hoanoMobile
        )} src='imgs/hoano.svg' alt="backgroundHoano" />

        {!isTablet && <img className={clsx(M.bgImg, M.buphoa)} src='imgs/buphoa.svg' alt="backgroundBuphoa" />}
      </div>

      <div className={M.scrollSnapVerticalContainer}>
        <div className={M.snapItem}>
          <div className={M.headerIntroVideo}>
            <video
              autoPlay muted loop
              src={
                isPhone ? 'imgs/headerIntroVideo_phone.mp4'
                  : isTablet ? 'imgs/headerIntroVideo_tablet.mp4'
                    : 'imgs/headerIntroVideo.mp4'
              }
            ></video>
          </div>
        </div>

        <div className={clsx(
          !isTablet && 'sectionDesktop',
          !isTablet && M.snapItem
        )}>

          <div className={clsx(
            isTablet && 'sectionMobile',
            isTablet && M.snapItem
          )}>
            <div className="img1">
              <img src='imgs/Mission.png' alt="Mission" />
            </div>

            <div className='text left'>
              <div className='title'>
                Sứ mệnh{isPhone ? <br /> : ' - '}Tầm nhìn
              </div>

              <div className='description'>
                <p>
                  Chúng tôi sẽ đồng hành và chia sẻ với bạn trên hành trình về lại với khu vườn
                  bình an và hạnh phúc mà mỗi chúng ta luôn sở hữu. Nếu như bạn đang trong hành trình muốn thấu hiểu chính mình, về với ngôi nhà nội tâm để thay đổi bản thân và nâng tầm tâm thức.
                  <br />Chúc mừng bạn!<br />
                  Zenup sẽ là những người đồng hành với bạn trên một đoạn đường dài bền bỉ, và cùng bạn chế tác bình an cho chính mình để lan tỏa niềm hạnh phúc bình an đó đến mọi người xung quanh.
                </p>
                Chúng ta cùng nắm tay nhau nhé!
              </div>
            </div>

          </div>

          <div className={clsx(
            isTablet && 'sectionMobile',
            isTablet && M.snapItem
          )}>
            <div className="img2">
              <img src='imgs/WhoWeAre.png' alt="WhoWeAre" />
            </div>

            <div className='text right'>
              <div className='title'>
                Zen Up là ai?
              </div>

              <p className='description'>
                Chúng tôi là những người trẻ, có may mắn được học cách sống thiền.
                <br />
                Từ khi thực hành sống thiền trọn vẹn nhận biết, cuộc sống của chúng tôi đã có những thay đổi tích cực một cách ngoạn mục. Chúng tôi được tháo những nút thắt trong tâm, tìm thấy cho chính mình đáp án cho những câu hỏi chất chứa đã lâu. Chúng tôi bắt đầu tìm kiếm sự tích cực ngay cả khi nhiều điều diễn ra không thực sự như ý chúng tôi muốn.
                <br />
                Chúng tôi có một định nghĩa mới về hạnh phúc đích thực
                <br />
                Chúng tôi nhìn mọi việc đến đi một cách nhẹ nhàng, thanh thản, chậm rãi hơn.
                <br />
                Đó là lúc chúng tôi thực sự sống trong giây phút đang là!
              </p>
            </div>
          </div>

        </div >

        <div className={clsx(
          !isTablet && 'sectionDesktop',
          !isTablet && M.snapItem
        )}>

          <div className={clsx(
            isTablet && 'sectionMobile',
            isTablet && M.snapItem
          )}>
            <div className="img1">
              <img src='imgs/OurTransformationJourney.png' alt="Mission" />
            </div>

            <div className='text left'>
              <div className='title'>
                Hành trình của Zenup
              </div>

              <p className='description'>
                Bắt đầu có một lối sống chậm hơn,
                <br />
                thảnh thơi hơn
                <br />
                và bình an hơn...
              </p>
            </div>
          </div>

          <div className={clsx(
            isTablet && 'sectionMobile',
            isTablet && M.snapItem
          )}>
            <div className="img2">
              <img src='imgs/WhatWeDo.png' alt="WhoWeAre" />
            </div>

            <div className='text right'>
              <div className='title'>
                Nhiệm vụ của Zenup
              </div>

              <p className='description'>
                Và giờ đây, khi nhận được rất nhiều điều tốt đẹp từ cuộc sống thiền trọn vẹn nhận biết.
                <br />
                Chúng tôi luôn trân quý và biết ơn những điều mình may mắn nhận được.
                <br />
                Vì thế, chúng tôi muốn lan tỏa, muốn hiến tặng điều chúng tôi đã được nhận đến mọi người, bởi tất cả chúng ta đều xứng đáng.
                <br />
                Dù bạn già hay trẻ, dù bạn ở nơi đâu, chỉ cần bạn có mong muốn bình an và mở lòng đón nhận.
                <br />
                Chúng ta cùng đồng hành và chia sẻ với nhau trên hành trình về với bình an, trở lại đúng giây phút đang là nhé!
              </p>
            </div>
          </div >

        </div>

        <div className={M.snapItem}>
          <SectionJoinOurCommunity />
        </div>
      </div>

    </>
  );
}

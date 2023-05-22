import clsx from 'clsx';
import M from "./Home.module.scss";
import Header from "./Header/Header";
import SectionJoinOurCommunity from "./Sections/SectionJoinOurCommunity";

import './Sections/section.scss';

import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Home() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  return (
    <>
      <div className={M.background}>

        <img className={clsx(
          M.bgImg, M.hoano,
          isMobile && M.hoanoMobile
        )} src='imgs/hoano.svg' alt="backgroundHoano" />

        {!isMobile && <img className={clsx(M.bgImg, M.buphoa)} src='imgs/buphoa.svg' alt="backgroundBuphoa" />}
      </div>

      <div className={M.scrollSnapVerticalContainer}>
        <div className={M.snapItem}>
          {isMobile ?
            <Header />
            :
            <div className={M.headerIntroVideo}>
              <video width="100%" autoPlay muted loop src='imgs/headerIntroVideo.mp4'></video>
            </div>
          }
        </div>

        <div className={clsx(
          !isMobile && 'sectionDesktop',
          !isMobile && M.snapItem
        )}>

          <div className={clsx(
            isMobile && 'sectionMobile',
            isMobile && M.snapItem
          )}>
            <div className="img1">
              <img src='imgs/Mission.png' alt="Mission" />
            </div>

            <div className='text left'>
              <div className='title'>
                Mission
              </div>

              <p className='description'>
                Give everyone a masterkey to Self-Awareness so that we live a happier life.
                {!isMobile && <br />} Công ty của chúng tôi được lập nên với một sứ mệnh duy nhất, trao cho bạn bí quyết có một cuộc sống bình an, hạnh phúc.
                {!isMobile && <br />} Nếu như bạn đang trong hành trình muốn thấu hiểu chính mình, thay đổi bản thân và nâng tầm tâm thức, chúc mừng bạn, chúng tôi sẽ là bạn đồng hành với bạn trên một đoạn đường  dài bền bỉ, đến khi bạn tự chế tác được bình an cho chính mình và lan tỏa niềm hạnh phúc đến mọi người xung quanh. Ngay lúc ấy, chúng tôi đã hoàn thành sứ mệnh trao chiếc chìa khóa vạn năng đến bạn rồi.
                {!isMobile && <br />}{!isMobile && <br />} Chúng ta cùng nắm tay nhau nhé!
              </p>
            </div>

          </div>

          <div className={clsx(
            isMobile && 'sectionMobile',
            isMobile && M.snapItem
          )}>
            <div className="img2">
              <img src='imgs/WhoWeAre.png' alt="WhoWeAre" />
            </div>

            <div className='text right'>
              <div className='title'>
                Who we are
              </div>

              <p className='description'>
                Chúng tôi là những người trẻ, có may mắn được học cách sống thiền.
                Từ khi thực hành sống thiền, cuộc sống của chúng tôi đã có những thay đổi tích cực một cách ngoạn mục.
                Chúng tôi được tháo những nút thắt trong tâm, tìm thấy đáp án cho những câu hỏi chất chứa đã lâu.
                Chúng tôi bắt đầu tìm kiếm sự tích cực trong điều diễn ra không thực sự như ý chúng tôi muốn.
              </p>
            </div>
          </div>

        </div >

        <div className={clsx(
          !isMobile && 'sectionDesktop',
          !isMobile && M.snapItem
        )}>

          <div className={clsx(
            isMobile && 'sectionMobile',
            isMobile && M.snapItem
          )}>
            <div className="img1">
              <img src='imgs/OurTransformationJourney.png' alt="Mission" />
            </div>

            <div className='text left'>
              <div className='title'>
                Our transformation journey
              </div>

              <p className='description'>
                Chúng tôi bắt đầu có một lối sống chậm, thảnh thơi và chất lượng hơn.
                {!isMobile && <br />} Chúng tôi có một định nghĩa mới về hạnh phúc đích thực.
                {!isMobile && <br />} Chúng tôi nhìn mọi việc đến đi một cách nhẹ nhàng, thanh thản.
                {!isMobile && <br />} Và thỉnh thoảng bất chợt nhìn thấy mình trong gương,
                {!isMobile && <br />} chúng tôi nhận ra mình đang mỉm cười từ lúc nào.
              </p>
            </div>
          </div>

          <div className={clsx(
            isMobile && 'sectionMobile',
            isMobile && M.snapItem
          )}>
            <div className="img2">
              <img src='imgs/WhatWeDo.png' alt="WhoWeAre" />
            </div>

            <div className='text right'>
              <div className='title'>
                What we do
              </div>

              <p className='description'>
                Và giờ đây, khi nhận được rất nhiều điều tốt đẹp từ cuộc sống thiền.
                {!isMobile && <br />} Chúng tôi luôn trân quý và biết ơn những điều mình may mắn nhận được.
                {!isMobile && <br />} Chúng tôi bắt đầu muốn lan tỏa, muốn hiến tặng điều chúng tôi đã được nhận đến mọi người, bởi tất cả chúng ta đều xứng đáng.

                Dù bạn già hay trẻ, dù bạn ở nơi đâu, chỉ cần bạn có mong muốn bình an và mở lòng đón nhận.

                Chúng tôi sẽ trao tặng giá trị tuyệt vời này cho bạn.

                Sứ mạng của mỗi chúng ta khi đến cuộc sống này chính là sống bình an và hạnh phúc.
                {!isMobile && <br />} Bạn đã sẵn sàng thực hiện sứ mạng cao cả này chưa?
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

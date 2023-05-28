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
                    title="Sự kiện"
                    imgFolder='ZenupWorkshops'
                />

                <div className={M.section}>
                    <BoxImgText
                        image="imgs/Categories/ZenupWorkshops/descriptionBackground.png"
                        paragraph={
                            <>
                                <p>
                                    Khám phá các lịch trình workshop và sự kiện mà chúng tôi tổ chức - một cơ hội để gặp gỡ và trau dồi kỹ năng sống thiền!
                                </p>
                                <p>
                                    Zenup tổ chức đều đặn hàng tháng những buổi workshop và chương trình thiền tập, dành cho cá nhân và cả các tổ chức doanh nghiệp. Chúng tôi tạo ra một không gian để trau dồi kỹ năng sống thiền cho mỗi người, giúp họ khám phá hành trình sống Thiền và áp dụng vào cuộc sống hàng ngày.
                                </p>
                                <p>
                                    Các sự kiện workshop của chúng tôi không chỉ giới thiệu về sống Thiền, mà còn đặc biệt tập trung vào việc thực hành lối sống trọn vẹn nhận biết. Chúng tôi chia sẻ các phương pháp thiền định thường xuyên mà bạn có thể áp dụng trong cuộc sống hàng ngày, để giúp bạn trở thành phiên bản tốt nhất của chính mình.
                                </p>
                                <p>
                                    Chúng tôi cung cấp hai loại sự kiện: dành cho cá nhân và dành cho công ty.
                                </p>
                                <p>
                                    Sự kiện dành cho cá nhân là dành cho những người muốn thực hành thiền sâu hơn và khám phá cách sống thiền trọn vẹn nhận biết  thông qua việc tham gia vào các hoạt động thiền tập nhóm.
                                </p>
                                <p>
                                    Sự kiện dành cho công ty được thiết kế để tạo ra một môi trường làm việc lành mạnh và hiệu quả hơn. Chương trình của chúng tôi giúp nhân viên giảm căng thẳng, tăng cường tập trung và sáng tạo, đồng thời cải thiện sức khỏe tổng thể. Chúng tôi sẽ làm việc với nhóm của bạn để tạo ra một chương trình tùy chỉnh, đáp ứng đúng nhu cầu của tổ chức và công ty của bạn. Cho dù bạn đang tìm cách tăng cường thiền định cho một nhóm cụ thể hoặc tạo ra một môi trường làm việc chứa đầy chánh niệm, chúng tôi luôn sẵn sàng hỗ trợ bạn trên hành trình của mình.
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

import M from './WorkWithUs.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import SendResumeForm from '../SendResumeForm/SendResumeForm';

export default function WorkWithUs() {
    const { width } = useWindowDimensions();
    const isTablet = width <= 768;
    const isPhone = width <= 480;

    return (
        <>
            <div className={M.background}>
                <img className={M.backgroundPattern} src='imgs/WorkWithUs/backgroundPattern.png' alt="backgroundPattern" />
            </div>

            <div className={M.contentBox}>

                <div className={M.header}>

                    {isPhone ?
                        <img className={M.textCover_mobile} src='imgs/WorkWithUs/textCover_mobile.png' alt="textCover_mobile" />
                        :
                        <img className={M.textCover} src='imgs/WorkWithUs/textCover.png' alt="textCover" />
                    }

                    <div className={M.describtion}>
                        <p>
                            Tham gia Zenup với tư cách cộng tác viên và là thành viên của một nhóm năng động chuyên tạo ra tác động tích cực đến xã hội. Với tư cách là cộng tác viên, bạn sẽ có cơ hội hợp tác chặt chẽ với nhóm của chúng tôi và đóng góp các kỹ năng và kiến thức chuyên môn của mình để giúp chúng tôi đạt được sứ mệnh của mình.
                        </p>

                        <p>
                            Chúng tôi chú trọng vào sự đa dạng, tính sáng tạo và tinh thần đồng đội, đồng thời cam kết cung cấp một môi trường làm việc hỗ trợ và hòa nhập, nơi mọi tiếng nói đều được lắng nghe và coi trọng.
                        </p>

                        <p>
                            Nếu bạn đam mê tạo ra sự khác biệt và muốn trở thành thành viên của nhóm chuyên tạo ra sự thay đổi tích cực, chúng tôi rất mong nhận được phản hồi từ bạn.
                        </p>
                    </div>
                    {/* 
                    <div className={M.describtion}>
                        <p>
                            Join Zenup as a collaborator and be a part of a dynamic team dedicated to making a positive impact on society. As a collaborator, you will have the opportunity to work closely with our team and contribute your skills and expertise to help us achieve our mission.
                        </p>

                        <p>
                            We value diversity, creativity, and teamwork, and are committed to providing a supportive and inclusive work environment where all voices are heard and valued.
                        </p>

                        <p>
                            If you are passionate about making a difference and want to be part of a team that is dedicated to creating positive change, we would love to hear from you.
                        </p>
                    </div> */}
                </div>

                <div className={M.sendResumeForm}>
                    {/* <h3>We look forward to hearing from you and potentially welcoming you to ZENUP!</h3> */}
                    <SendResumeForm />
                </div>

            </div>
        </>

    )
}

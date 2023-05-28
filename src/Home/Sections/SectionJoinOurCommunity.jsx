import './section.scss';
import M from './SectionJoinOurCommunity.module.scss';


export default function SectionJoinOurCommunity() {
    return (
        <div className={`
        section 
        ${M.SectionJoinOurCommunity}
        `}>
            <div className={M.text}>
                <div className={M.title}>
                    Đồng hành và chia sẻ cùng Zenup
                </div>

                <p>
                    Chúng tôi tìm thấy nhau, không còn cảm giác lạc lõng nữa, tìm thấy một cộng đồng mà chúng tôi thuộc về.  Đã là những người xa lạ, nhưng khi gặp nhau dường như đã quen biết từ lâu.
                    Chúng tôi chia sẻ cởi mở về cuộc sống và suy nghĩ của mình mà không sợ bị đánh giá.
                    Chúng tôi ủng hộ, đồng hành và động viên nhau. Và đôi khi sự cô đơn hoặc mệt mỏi xuất hiện, chúng tôi biết có những người luôn sẵn sàng nâng đỡ mình lúc đó, để rồi khi đủ vững, mỗi người sẽ tự đứng trên đôi chân của chính mình.
                </p>
                <p>
                    Hãy tham gia chia sẻ và đồng hành với ZENUP!
                </p>
                <div
                    className={M.CTA_button}>
                    <a
                        target="_blank" rel="noreferrer"
                        href="https://www.instagram.com/nauanddandie/"
                    >Tham gia</a>
                </div>
            </div>

            <div className={M.Instas}>
                <img src='imgs/Insta_01.png' alt="Insta_01" />
                <img src='imgs/Insta_02.png' alt="Insta_02" />
                <img src='imgs/Insta_03.png' alt="Insta_03" />
            </div>
        </div >
    )
}
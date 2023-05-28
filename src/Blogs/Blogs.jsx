import { Link } from 'react-router-dom';
import M from './Blogs.module.scss';

export default function Blogs() {
    return (
        <>
            <div className={M.blogs}>
                <Link to='/zen-journaling' className={M.CTA_button}>Blogs</Link>

                <div className={M.description}>
                    Qua những trang nhật ký thiền, bạn sẽ hiểu thêm về sống thiền và những câu chuyện chuyển hoá của các bạn trẻ thực hành lối sống thiền Trọn Vẹn Nhận Biết.
                    {/* Read more collected stories written by all people
                    who are willing to share their journeys */}
                </div>
            </div>

        </>
    )
}
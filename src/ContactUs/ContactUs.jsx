import M from './ContactUs.module.scss';
import useWindowDimensions from '../hooks/useWindowDimensions';
import SendMailForm from '../SendMailForm/SendMailForm';

const ContactUs = () => {
  const { width } = useWindowDimensions();
  const isTablet = width <= 768;
  const isPhone = width <= 480;

  return (
    <>
      <div className={M.background}>
        <img className={M.backgroundPattern_mobile} src='imgs/ContactUs/backgroundPattern_mobile.png' alt="backgroundPattern_mobile" />
      </div>

      <div className={M.contentBox}>
        <div className={M.header}>
          <div className={M.letsTalk}>
            LET'S TALK
          </div>

          {isPhone ?
            <img className={M.textCover_mobile} src='imgs/ContactUs/textCover_mobile.png' alt="textCover_mobile" />
            :
            <img className={M.textCover} src='imgs/ContactUs/textCover.png' alt="textCover" />
          }
        </div>

        <div className={M.sendMailForm}>
          <SendMailForm />
        </div>
      </div>
    </>
  );
}

export default ContactUs;

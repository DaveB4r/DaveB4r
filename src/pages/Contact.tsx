import { FC, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { translate } from '../i18n';
import { RootState } from '../store';

const Contact: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  const refForm = useRef<HTMLFormElement>(null as unknown as HTMLFormElement);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ghor9ws',
        'template_hsehebw',
        refForm.current,
        'ZOjmJRlcHmjsUvZIs'
      ).then(
        () => {
          console.log("Message ok");
          // window.location.reload();
        },
        () => {
          console.log("Error");
        }
      )
  }

  return(
    <Fragment>
      <div className="contact-page" id="contact">
        <h2 className='title'>{translate('contactTitle', language)}</h2>
        <p>{translate('contactDescription', language)}</p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder={translate("contactName", language)} />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder={translate("contactemail", language)} />
              </li>
              <li>
                <input type="text" name="subject" placeholder={translate("contactSubject", language)} />
              </li>
              <li>
                <textarea name="message" placeholder={translate("contactMessage", language)}></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value={translate("contactBtn", language)} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
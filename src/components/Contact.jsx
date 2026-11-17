import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import StarPattern from './StarPattern.jsx';

export default function Contact() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <StarPattern color="#ffffff" opacity={0.05} />
      <div className="container section contact__inner">
        <Reveal className="section-heading">
          <p className="eyebrow">تواصل معنا</p>
          <h2 id="contact-title">نسعد بتواصلكم</h2>
        </Reveal>

        <Reveal className="contact__grid">
          <a className="contact-item" href="tel:+966XXXXXXXXX">
            <span className="contact-item__icon">
              <Phone size={26} weight="light" aria-hidden="true" />
            </span>
            <span>
              <span className="contact-item__label">الهاتف</span>
              <span className="contact-item__value" dir="ltr">
                +966 XX XXX XXXX
              </span>
            </span>
          </a>
          <a className="contact-item" href="mailto:info@akoya-koshak.sa">
            <span className="contact-item__icon">
              <EnvelopeSimple size={26} weight="light" aria-hidden="true" />
            </span>
            <span>
              <span className="contact-item__label">البريد</span>
              <span className="contact-item__value" dir="ltr">
                info@akoya-koshak.sa
              </span>
            </span>
          </a>
          <div className="contact-item">
            <span className="contact-item__icon">
              <MapPin size={26} weight="light" aria-hidden="true" />
            </span>
            <span>
              <span className="contact-item__label">العنوان</span>
              <span className="contact-item__value">جبيل الصناعية، المنطقة الشرقية، المملكة العربية السعودية</span>
            </span>
          </div>
        </Reveal>

        <div className="site-footer">
          <span className="site-footer__brand">
            <img className="site-footer__logo" src="/assets/logo.png" alt="شعار كوشك" width="105" height="44" />
          </span>
          <span lang="en" dir="ltr">Khoja Kojak Endowment Foundation</span>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { ArrowRight, Eye, EyeSlash, UserCircle } from '@phosphor-icons/react';
import { SmallStar } from '../components/Emblems.jsx';

/*
 * Login screen — UI only. There is no backend yet, so submitting shows a notice
 * instead of signing in. Wire `handleSubmit` to the real auth API when it exists.
 */

/* Login-only copy (not repeated elsewhere on the site) — to confirm with the client. */
const benefits = [
  { title: 'متابعة طلباتك', text: 'اطّلع على حالة طلبات تزويد المياه أولاً بأول' },
  { title: 'بيانات جهتك في مكان واحد', text: 'المسجد أو المدرسة أو الجمعية — محفوظة لطلباتك القادمة' },
  { title: 'تواصل أسرع مع فريق الوقف', text: 'ردود ومتابعة مباشرة على كل طلب' },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotice('خدمة تسجيل الدخول غير متاحة حالياً. للتواصل: info@akoya-koshak.sa');
  };

  return (
    <>
      <a className="skip-link" href="#login-form">تخطَّ إلى نموذج الدخول</a>
      <main className="login">
        {/* ---------- Heritage side ---------- */}
        <aside className="heritage" aria-label="عن الوقف">
          <div className="kk-pattern heritage__pattern" aria-hidden="true" />
          <div className="heritage__glow" aria-hidden="true" />

          <div className="heritage__inner">
            <a className="heritage__logo" href="/">
              <img src="/assets/logo.png" alt="كوشك — الصفحة الرئيسية" width="134" height="56" />
            </a>

            <p className="eyebrow heritage__eyebrow">بوابة المستفيدين</p>

            <p className="heritage__title">
              حسابك في وقف السقيا
              <br />
              <em>خدمةٌ أيسر وعطاءٌ أقرب</em>
            </p>

            <section className="benefits" aria-labelledby="benefits-title">
              <h2 id="benefits-title" className="benefits__title">
                ما يتيحه لك حسابك
              </h2>
              <ol className="benefits__list">
                {benefits.map((b, i) => (
                  <li key={b.title}>
                    <span className="benefits__seal" aria-hidden="true">
                      {['١', '٢', '٣'][i]}
                    </span>
                    <span className="benefits__text">
                      <b>{b.title}</b>
                      <span>{b.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <figure className="heritage__verse">
              <span className="heritage__verse-rule" aria-hidden="true">
                <SmallStar size={16} />
              </span>
              <blockquote>وَسَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا</blockquote>
              <figcaption>سورة الإنسان — الآية ٢١</figcaption>
            </figure>
          </div>
        </aside>

        {/* ---------- Form side ---------- */}
        <section className="login__main" aria-labelledby="login-title">
          <div className="kk-pattern login__main-pattern" aria-hidden="true" />

          <div className="login__top">
            <a className="login__back" href="/">
              <ArrowRight size={20} weight="regular" aria-hidden="true" />
              العودة إلى الرئيسية
            </a>
          </div>

          <div className="arch-card">
            <div className="arch-card__inner">
              <span className="arch-card__seal" aria-hidden="true">
                <UserCircle size={34} weight="light" />
              </span>
              <p className="eyebrow arch-card__eyebrow">مرحباً بكم</p>
              <h1 id="login-title" className="arch-card__title">
                تسجيل الدخول
              </h1>
              <p className="arch-card__intro">أدخل بياناتك للدخول إلى حسابك.</p>

              <form id="login-form" className="login__form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="login-id">البريد الإلكتروني أو رقم الجوال</label>
                  <input
                    id="login-id"
                    name="username"
                    type="text"
                    inputMode="email"
                    autoComplete="username"
                    dir="ltr"
                    required
                  />
                </div>

                <div className="field">
                  <div className="field__row">
                    <label htmlFor="login-password">كلمة المرور</label>
                    <button type="button" className="field__link">
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                  <div className="field__password">
                    <input
                      id="login-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      dir="ltr"
                      required
                    />
                    <button
                      type="button"
                      className="field__toggle"
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeSlash size={22} weight="light" aria-hidden="true" />
                      ) : (
                        <Eye size={22} weight="light" aria-hidden="true" />
                      )}
                      {showPassword ? 'إخفاء' : 'إظهار'}
                    </button>
                  </div>
                </div>

                <label className="check">
                  <input type="checkbox" name="remember" />
                  <span>تذكرني على هذا الجهاز</span>
                </label>

                <button type="submit" className="btn btn--gold-grad btn--block login__submit">
                  تسجيل الدخول <span className="btn__arrow" aria-hidden="true">←</span>
                </button>

                <p className="login__notice" role="status" aria-live="polite">
                  {notice}
                </p>
              </form>
            </div>
          </div>

          <p className="login__help">
            تحتاج إلى مساعدة؟ <a href="/water/#contact">تواصل معنا</a>
          </p>
        </section>
      </main>
    </>
  );
}

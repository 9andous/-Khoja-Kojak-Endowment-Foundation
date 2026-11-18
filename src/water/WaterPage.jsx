import { UserCircle } from '@phosphor-icons/react';
import Header from '../components/Header.jsx';
import Contact from '../components/Contact.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarPattern from '../components/StarPattern.jsx';
import { SmallStar } from '../components/Emblems.jsx';

const links = [
  { href: '#top', label: 'الرئيسية' },
  { href: '#about', label: 'عن الوقف' },
  { href: '#quality', label: 'الجودة' },
  { href: '#contact', label: 'تواصل' },
];

/* Login opens the login page; the request button stays inert, as on the previous site. */
const LoginButton = ({ block }) => (
  <a href="/login/" className={`btn btn--outline btn--sm ${block ? 'btn--block' : ''}`}>
    <UserCircle size={22} weight="light" aria-hidden="true" />
    تسجيل الدخول
  </a>
);
const RequestButton = ({ block }) => (
  <button type="button" className={`btn btn--primary btn--sm ${block ? 'btn--block' : ''}`}>
    طلب تزويد بالماء
  </button>
);

const stats = [
  { value: '10+', label: 'سنوات من الخبرة' },
  { value: '28+', label: 'جهة مستفيدة' },
  { value: '3', label: 'أحجام منتجات' },
  { value: '98%', label: 'معدل جودة المنتج', gauge: 98 },
];

const waqfFacts = [
  { value: '1163هـ', label: 'سنة التأسيس' },
  { value: '275+ عاماً', label: 'عمر الوقف' },
  { value: 'خيري', label: 'طابع الوقف' },
];

const factoryFacts = [
  { label: 'الموقع', value: 'جبيل الصناعية' },
  { label: 'خطوط الإنتاج', value: '3 خطوط متكاملة' },
  { label: 'الطاقة الإنتاجية', value: '20,000 عبوة / يوم' },
  { label: 'نظام المعالجة', value: 'RO + UV + أوزون', ltr: true },
];

const stages = [
  { n: 'المرحلة 1', title: 'مصدر المياه', text: 'مياه جوفية مختارة تخضع لفحص دوري مستمر' },
  { n: 'المرحلة 2', title: 'معالجة RO', text: 'تصفية عكسية متعددة المراحل لإزالة الشوائب' },
  { n: 'المرحلة 3', title: 'تعقيم بالأوزون', text: 'حقن الأوزون والأشعة فوق البنفسجية للقضاء على البكتيريا' },
  { n: 'المرحلة 4', title: 'فحص المختبر', text: 'تحاليل شاملة قبل الإفراج وفق معايير WHO وSFDA' },
];

const beneficiaries = ['مساجد', 'مدارس', 'جمعيات خيرية', 'مستشفيات', 'أفراد وعائلات'];

export default function WaterPage() {
  return (
    <>
      <a className="skip-link" href="#main">تخطَّ إلى المحتوى</a>
      <Header
        homeHref="/"
        links={links}
        actions={
          <>
            <LoginButton />
            <RequestButton />
          </>
        }
        mobileExtra={
          <>
            <RequestButton block />
            <LoginButton block />
          </>
        }
      />

      <main id="main">
        {/* ---------- Hero (design-file layout) ---------- */}
        <section className="water-hero" id="top" aria-labelledby="hero-title">
          <div className="kk-pattern water-hero__pattern" aria-hidden="true" />
          <div className="container water-hero__grid">
            <Reveal className="water-hero__text">
              <p className="eyebrow water-hero__eyebrow">أوقاف محمد بن محمد خوجه كوجك — منذ 1163 هـ</p>
              <h1 id="hero-title" className="water-hero__title">
                ماء طاهر نقي
                <span>من خير الأوقاف</span>
              </h1>
              <p className="water-hero__lead">مياه معبأة بأعلى معايير الجودة العالمية</p>
              <div className="water-hero__ctas">
                <a className="btn btn--gold-grad" href="#about">
                  استكشف <span className="btn__arrow" aria-hidden="true">↓</span>
                </a>
                <a className="btn btn--ghost-ivory" href="#cta">
                  اطلب الماء
                </a>
              </div>
            </Reveal>

            <div className="bottle-stage" aria-hidden="true">
              <div className="bottle-stage__halo" />
              <div className="bottle-stage__frame" />
              <div className="arch-frame bottle-stage__arch" />
              <span className="drop" style={{ width: 22, height: 22, top: 80, right: 40 }} />
              <span className="drop" style={{ width: 14, height: 14, top: 180, left: 30, animationDelay: '-2s' }} />
              <span className="drop" style={{ width: 18, height: 18, bottom: 90, right: 20, animationDelay: '-4s' }} />
            </div>
          </div>

          <svg className="water-hero__wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60 C 240 10 480 110 720 60 S 1200 10 1440 60 V110 H0Z" fill="#9FD3DE" opacity=".35" />
            <path d="M0 80 C 300 30 520 120 760 76 S 1180 40 1440 84 V110 H0Z" fill="#FAF6EC" />
          </svg>
        </section>

        {/* ---------- Stats ---------- */}
        <section className="water-stats" id="stats" aria-label="أرقام المصنع">
          <div className="container">
            <Reveal as="dl" className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <dt className="stat__label">{s.label}</dt>
                  <dd className="stat__value">{s.value}</dd>
                  {s.gauge && (
                    <span className="stat__gauge" aria-hidden="true">
                      <i style={{ width: `${s.gauge}%` }} />
                    </span>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- About waqf & factory ---------- */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <SectionHeading
              id="about-title"
              center
              eyebrow="تعريف بالوقف والمصنع"
              title="أوقاف محمد بن محمد خوجه كوجك"
              text="وقف خيري عريق يجمع بين الإرث الإسلامي العميق والصناعة الحديثة لخدمة أهل مكة المكرمة والمجتمع"
            />

            <div className="intro-blocks">
              <Reveal as="article" className="intro-block">
                <p className="intro-block__label">تعريف بالوقف</p>
                <h3>الوقف الخيري العريق</h3>
                <div className="prose">
                  <p>
                    يُعدّ وقف أوقاف محمد بن محمد خوجه كوجك من أبرز الأوقاف القائمة بمكة المكرمة، وقد أُنشئ عام 1163هـ،
                    أي منذ ما يقارب 275 عاماً. يهدف الوقف إلى جعل جزء كبير من إيراداته سبيل ماء لأهل مكة المكرمة.
                  </p>
                  <p>
                    بدأ الوقف في أصله بئراً بجوار بيت الله الحرام مع مجموعة من الخادمين لتقديم الخدمة لقاصدي البئر،
                    إضافة إلى مجموعة من المساكن الشعبية التي تُؤجَّر ويُصرَف دخلها على صيانة البئر وأجور العاملين.
                  </p>
                  <p>
                    مع توسعة الحرم المكي الشريف، تطورت الأنشطة بشكل كبير حتى باتت تشمل توزيع المياه عبر صهاريج كبيرة
                    وعبوات صحة الماء التي تنتشر اليوم في كثير من المساجد والقطاعات الخدمية والحكومية.
                  </p>
                </div>
                <dl className="mini-facts">
                  {waqfFacts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal as="article" className="intro-block intro-block--factory" delay={80}>
                <p className="intro-block__label">تعريف بالمصنع</p>
                <h3>مصنع مياه الوقف — جبيل الصناعية</h3>
                <div className="prose">
                  <p>
                    استجابةً للتطور وزيادة الطلب، طوّر الوقف منظومته ليُنشئ مصنع مياه الوقف في جبيل الصناعية، المنطقة
                    الشرقية. يعتمد المصنع على أحدث تقنيات المعالجة لإنتاج مياه شرب نقية.
                  </p>
                  <p>
                    يُزوِّد المصنع المساجد والمدارس والجمعيات الخيرية وذوي الاحتياج بالمياه المعبأة سبيلاً خيرياً، كما
                    يخدم القطاعات التجارية والحكومية وفق معايير جودة صارمة معتمدة دولياً.
                  </p>
                </div>
                <dl className="spec-list">
                  {factoryFacts.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd dir={f.ltr ? 'ltr' : undefined}>{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Quality ---------- */}
        <section className="section" id="quality" aria-labelledby="quality-title">
          <div className="container">
            <SectionHeading
              id="quality-title"
              center
              eyebrow="معايير الجودة"
              title="نظام الجودة والسلامة"
              text="كل قطرة تمر بأربع مراحل صارمة قبل وصولها إليك"
            />
            <ol className="stages">
              {stages.map((s, i) => (
                <Reveal as="li" className="stage" key={s.n} delay={i * 70}>
                  <span className="stage__marker" aria-hidden="true">
                    {i + 1}
                  </span>
                  <p className="stage__n">{s.n}</p>
                  <h3 className="stage__title">{s.title}</h3>
                  <p className="stage__text">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Charity CTA ---------- */}
        <section className="section section--tint charity" id="cta" aria-labelledby="charity-title">
          <StarPattern color="var(--gold-600)" opacity={0.08} />
          <Reveal className="container charity__inner">
            <p className="charity__note">
              <SmallStar size={16} />
              خدمة خيرية مجانية — سبيلاً لوجه الله
            </p>
            <h2 id="charity-title" className="charity__title">
              هل تحتاج إلى تزويد بالماء؟
            </h2>
            <p className="charity__text">مياه الوقف تصل إليك أينما كنت — نخدم الجميع دون مقابل</p>
            <ul className="tag-list charity__tags">
              {beneficiaries.map((b) => (
                <li className="tag" key={b}>
                  {b}
                </li>
              ))}
            </ul>
            <div className="charity__actions">
              {/* Inert, as on the previous site */}
              <button type="button" className="btn btn--primary">
                اطلب تزويدك بالماء الآن
              </button>
              <a className="btn btn--outline" href="#contact">
                اتصل بنا
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Contact />
    </>
  );
}

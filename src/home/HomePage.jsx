import { ArrowLeft } from '@phosphor-icons/react';
import Header from '../components/Header.jsx';
import Contact from '../components/Contact.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StarPattern from '../components/StarPattern.jsx';
import { DropEmblem, ArchEmblem, SmallStar } from '../components/Emblems.jsx';

const links = [
  { href: '#top', label: 'الرئيسية' },
  { href: '#about', label: 'عن الوقف' },
  { href: '#pillars', label: 'ركائزنا' },
  { href: '#contact', label: 'تواصل' },
];

const badge = <span className="founding-badge">مؤسسة وقفية — منذ ١١٦٣ هـ</span>;

const stats = [
  { value: '١١٦٣ هـ', label: 'سنة التأسيس' },
  { value: '٢٧٥+', label: 'عاماً من العطاء' },
  { value: '٠٢', label: 'أقسام وقفية' },
  { value: 'مكة', label: 'المكرمة — الموطن' },
];

const profile = [
  { label: 'سنة التأسيس', value: '١١٦٣', unit: 'هجرية' },
  { label: 'عمر الوقف', value: '٢٧٥+', unit: 'عاماً' },
  { label: 'الموطن', value: 'مكة', unit: 'المكرمة' },
  { label: 'طابع الوقف', value: 'خيري', unit: 'وقف أهلي' },
];

const pillars = [
  { n: '01', title: 'الأمانة', text: 'حفظ الوقف وصونه على مراد الواقف، وإدارته بشفافيةٍ ومسؤولية.' },
  { n: '02', title: 'الاستدامة', text: 'استثمار أصول الوقف بما يُديم نفعه ويضمن استمرار عطائه للأجيال.' },
  { n: '03', title: 'الإرث', text: 'صيانة المعالم الوقفية وتوثيق تاريخها حفظاً لذاكرة المكان.' },
  { n: '04', title: 'الخدمة', text: 'إيصال خير الوقف إلى أهل مكة المكرمة والمجتمع بأيسر السبل.' },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">تخطَّ إلى المحتوى</a>
      <Header homeHref="#top" accent="gold" links={links} actions={badge} mobileExtra={badge} />

      <main id="main">
        {/* ---------- Hero ---------- */}
        <section className="home-hero" id="top" aria-labelledby="hero-title">
          <StarPattern color="var(--gold-600)" opacity={0.05} />
          <div className="container home-hero__inner">
            <Reveal>
              <h1 id="hero-title" className="home-hero__title">
                أوقافُ محمد بن محمد <span className="text-gold">خوجه كوجك</span>
              </h1>
              <div className="rule home-hero__rule">
                <SmallStar size={16} />
              </div>
              <p className="home-hero__lead">
                وقفٌ خيريّ عريق بمكة المكرمة، بدأ بئراً بجوار بيت الله الحرام، وامتدّ أثره حتى صار اليوم قسمَين يخدمان
                الناس: سقيا الماء، وعمارة الأوقاف.
              </p>
            </Reveal>

            {/* ---------- Divisions ---------- */}
            <div className="divisions" aria-labelledby="divisions-title">
              <Reveal as="p" className="divisions__label" id="divisions-title">
                اختر القسم
              </Reveal>

              <div className="divisions__grid">
                <Reveal as="article" className="division division--active">
                  <a className="division__link" href="/water/">
                    <div className="division__band">
                      <span className="division__emblem">
                        <DropEmblem size={56} />
                      </span>
                      <span className="division__latin" lang="en">WAQF WATER</span>
                    </div>
                    <div className="division__body">
                      <h2 className="division__title">وقف السقيا</h2>
                      <p className="division__sub">سقيا وإنتاج وتوزيع</p>
                      <p className="division__text">
                        سبيلُ ماءٍ متجدّد — مياه معبأة نقية بأعلى معايير الجودة العالمية، تصل من خير الوقف إلى المساجد
                        والجمعيات والبيوت.
                      </p>
                      <ul className="division__features">
                        <li>منتجات معبأة</li>
                        <li>طلب وتوصيل</li>
                        <li>شهادات جودة</li>
                      </ul>
                      <span className="btn btn--primary division__cta">
                        دخول القسم
                        <ArrowLeft size={20} weight="regular" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </Reveal>

                <Reveal as="article" className="division division--soon" delay={80} aria-disabled="true">
                  <div className="division__band">
                    <span className="division__soon">قريباً</span>
                    <span className="division__emblem">
                      <ArchEmblem size={56} />
                    </span>
                    <span className="division__latin" lang="en">WAQF AL-AMAER</span>
                  </div>
                  <div className="division__body">
                    <h2 className="division__title">أوقاف العمائر</h2>
                    <p className="division__sub">عقارات وترميم وتوثيق</p>
                    <p className="division__text">
                      عمائر الوقف وأصوله العقارية — إدارةً واستثماراً وصيانةً لمعالمه التاريخية، حفظاً للإرث وإدامةً
                      لنفعه.
                    </p>
                    <ul className="division__features">
                      <li>العقارات الوقفية</li>
                      <li>الترميم والصيانة</li>
                      <li>التوثيق التاريخي</li>
                    </ul>
                    <span className="division__status">قيد الإنشاء</span>
                  </div>
                </Reveal>
              </div>

              <Reveal className="divisions__more">
                <a className="text-link" href="#about">
                  تعرّف على الوقف
                  <ArrowLeft size={18} weight="regular" aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Stats ---------- */}
        <section className="home-stats" aria-label="أرقام الوقف">
          <div className="container">
            <Reveal as="dl" className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <dt className="stat__label">{s.label}</dt>
                  <dd className="stat__value">{s.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container about">
            <div className="about__text">
              <SectionHeading id="about-title" eyebrow="تعريف بالوقف" title="إرثٌ يمتدّ من قلب مكة المكرمة" />
              <Reveal className="prose">
                <p>
                  يُعدّ وقف محمد بن محمد خوجه كوجك من أبرز الأوقاف القائمة بمكة المكرمة، وقد أُنشئ عام ١١٦٣ هـ، أي منذ
                  ما يقارب ٢٧٥ عاماً.
                </p>
                <p>
                  بدأ الوقف في أصله بئراً بجوار بيت الله الحرام، ومعه مجموعة من الخادمين لتقديم الخدمة لقاصدي البئر،
                  إضافةً إلى مساكن تُؤجَّر ويُصرَف دخلها على صيانة البئر وأجور العاملين.
                </p>
                <p>
                  ومع توسعة الحرم المكي الشريف تطوّرت أنشطة الوقف تطوّراً كبيراً، حتى صار اليوم يقوم على قسمَين
                  متكاملَين يخدمان أهل مكة والمجتمع.
                </p>
              </Reveal>

              <Reveal as="ul" className="about__divisions">
                <li>
                  <a href="/water/">
                    <span className="about__division-name">وقف السقيا</span>
                    <span className="about__division-desc">السقيا والإنتاج والتوزيع</span>
                    <ArrowLeft size={20} weight="regular" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <div>
                    <span className="about__division-name">أوقاف العمائر</span>
                    <span className="about__division-desc">الأصول العقارية وصيانة المعالم</span>
                  </div>
                </li>
              </Reveal>

              <Reveal as="blockquote" className="about__aim">
                يهدف الوقف إلى جعل جزء كبير من إيراداته سبيلَ ماءٍ لأهل مكة المكرمة.
              </Reveal>
            </div>

            <Reveal as="aside" className="profile" aria-labelledby="profile-title" delay={80}>
              <div className="profile__frame">
                <header className="profile__head">
                  <h3 id="profile-title">بطاقة الوقف</h3>
                  <span lang="en">ENDOWMENT PROFILE</span>
                </header>
                <dl className="profile__list">
                  {profile.map((p) => (
                    <div className="profile__row" key={p.label}>
                      <dt>{p.label}</dt>
                      <dd>
                        <span className="profile__value">{p.value}</span>
                        <span className="profile__unit">{p.unit}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="profile__foot">وقفٌ قائم ومستمر في خدمة قاصدي بيت الله الحرام</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Pillars ---------- */}
        <section className="section section--tint" id="pillars" aria-labelledby="pillars-title">
          <div className="container">
            <SectionHeading
              id="pillars-title"
              eyebrow="ركائزنا"
              title="قيمٌ تقوم عليها إدارة الوقف"
              text="أربع ركائز تحكم كل قرارٍ يخصّ الوقف، من سقيا الماء إلى عمارة الأصول."
            />
            <ol className="pillars">
              {pillars.map((p, i) => (
                <Reveal as="li" className="pillar" key={p.n} delay={i * 60}>
                  <span className="pillar__n">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Verse ---------- */}
        <section className="verse" aria-label="آية كريمة">
          <StarPattern color="#e2c98a" opacity={0.08} />
          <Reveal as="figure" className="container verse__inner">
            <blockquote className="verse__text">وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ</blockquote>
            <figcaption className="verse__ref">سورة الأنبياء — الآية ٣٠</figcaption>
          </Reveal>
        </section>
      </main>

      <Contact />
    </>
  );
}

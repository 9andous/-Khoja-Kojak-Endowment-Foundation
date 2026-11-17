import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, center = false, id }) {
  return (
    <Reveal className={`section-heading ${center ? 'section-heading--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

import { useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';

export default function Header({ homeHref = '#top', links = [], actions = null, mobileExtra = null, accent = 'teal' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href={homeHref}>
          <img className="brand__logo" src="/assets/logo.png" alt="شعار كوشك" width="115" height="48" />
          <span className="brand__text">
            <span className="brand__name">أوقاف محمد بن محمد خوجه كوجك</span>
            <span className="brand__latin">Khoja Kojak Endowment Foundation</span>
          </span>
        </a>

        {links.length > 0 && (
          <nav className={`nav nav--${accent}`} aria-label="التنقل الرئيسي">
            <ul className="nav__list">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="nav__link" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {actions && <div className="header-actions">{actions}</div>}

        {(links.length > 0 || mobileExtra) && (
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={24} weight="light" aria-hidden="true" />
            ) : (
              <List size={24} weight="light" aria-hidden="true" />
            )}
            <span>القائمة</span>
          </button>
        )}
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="container">
          <ul className="mobile-menu__list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {mobileExtra && <div className="mobile-menu__extra">{mobileExtra}</div>}
        </div>
      </div>
    </header>
  );
}

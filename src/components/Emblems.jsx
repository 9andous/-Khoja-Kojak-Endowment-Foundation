/* Hand-drawn line emblems in the logo's line weight. Decorative. */

export function DropEmblem({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M32 6C32 6 14 27 14 40a18 18 0 0 0 36 0C50 27 32 6 32 6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M22 41a10 10 0 0 0 8 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function ArchEmblem({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 56V30C12 18 22 9 32 6c10 3 20 12 20 24v26"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M22 56V34c0-6 4-11 10-13 6 2 10 7 10 13v22" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M6 56h52" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function SmallStar({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="4" y="4" width="12" height="12" />
        <rect x="4" y="4" width="12" height="12" transform="rotate(45 10 10)" />
      </g>
    </svg>
  );
}

/* Container silhouettes for product cards. */
export function CupShape() {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden="true" focusable="false">
      <path d="M30 40h60l-7 82a6 6 0 0 1-6 5H43a6 6 0 0 1-6-5L30 40Z" fill="var(--aqua-50)" stroke="currentColor" strokeWidth="2" />
      <path d="M26 34h68v6H26z" fill="var(--surface)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M36 72h48" stroke="var(--gold-600)" strokeWidth="2" />
      <path d="M38 96h44" stroke="currentColor" strokeWidth="1.25" opacity=".45" />
    </svg>
  );
}

export function BottleShape() {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden="true" focusable="false">
      <rect x="51" y="8" width="18" height="10" rx="2" fill="var(--surface)" stroke="currentColor" strokeWidth="2" />
      <path
        d="M52 18h16v8c0 4 12 8 12 18v76a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V44c0-10 12-14 12-18v-8Z"
        fill="var(--aqua-50)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M40 68h40M40 98h40" stroke="var(--gold-600)" strokeWidth="2" />
    </svg>
  );
}

export function JugShape() {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden="true" focusable="false">
      <rect x="50" y="6" width="20" height="10" rx="2" fill="var(--surface)" stroke="currentColor" strokeWidth="2" />
      <path
        d="M52 16h16v6c0 3 26 6 26 22v74a10 10 0 0 1-10 10H36a10 10 0 0 1-10-10V44c0-16 26-19 26-22v-6Z"
        fill="var(--aqua-50)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M26 66h68M26 100h68" stroke="var(--gold-600)" strokeWidth="2" />
      <path d="M26 83h68" stroke="currentColor" strokeWidth="1.25" opacity=".45" />
    </svg>
  );
}

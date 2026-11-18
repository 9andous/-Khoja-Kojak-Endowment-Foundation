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

import { useId } from 'react';

/* Subtle eight-point star lattice (khatam). Decorative only. */
export default function StarPattern({ color = 'currentColor', opacity = 0.06, size = 72 }) {
  const id = useId().replace(/:/g, '');
  const c = size / 2;
  const s = size * 0.3;
  const square = `M${c - s},${c - s} H${c + s} V${c + s} H${c - s} Z`;
  const d = s * 1.41;
  return (
    <svg className="pattern" aria-hidden="true" focusable="false" style={{ opacity }}>
      <defs>
        <pattern id={`star-${id}`} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1">
            <path d={square} />
            <path d={square} transform={`rotate(45 ${c} ${c})`} />
            <circle cx={c} cy={c} r={s * 0.42} />
            <path
              d={`M0,0 L${c - d},${c - d} M${size},0 L${c + d},${c - d} M0,${size} L${c - d},${c + d} M${size},${size} L${c + d},${c + d}`}
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#star-${id})`} />
    </svg>
  );
}

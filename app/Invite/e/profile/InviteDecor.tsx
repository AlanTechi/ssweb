type BalloonProps = {
  x: number;
  y: number;
  scale?: number;
  rotate?: number;
  fill: string;
  shade: string;
  highlight: string;
  gather: { x: number; y: number };
  curve?: number;
  opacity?: number;
};

function toLocal(
  px: number,
  py: number,
  x: number,
  y: number,
  rotate: number,
  scale: number,
) {
  const dx = px - x;
  const dy = py - y;
  const rad = (-rotate * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x: (dx * cos - dy * sin) / scale,
    y: (dx * sin + dy * cos) / scale,
  };
}

function Balloon({
  x,
  y,
  scale = 1,
  rotate = 0,
  fill,
  shade,
  highlight,
  gather,
  curve = 20,
  opacity = 1,
}: BalloonProps) {
  const end = toLocal(gather.x, gather.y, x, y, rotate, scale);
  const knot = { x: 0, y: 68 };
  const ctrl = {
    x: (knot.x + end.x) / 2 + curve,
    y: (knot.y + end.y) / 2,
  };

  return (
    <g opacity={opacity} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      {/* string attached at knot tip */}
      <path
        d={`M ${knot.x} ${knot.y} Q ${ctrl.x} ${ctrl.y} ${end.x} ${end.y}`}
        stroke="#7a5a3a"
        strokeWidth={1.35 / scale}
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d={`M ${knot.x} ${knot.y} Q ${ctrl.x + 1.2} ${ctrl.y + 1.5} ${end.x} ${end.y}`}
        stroke="#d2b08a"
        strokeWidth={0.65 / scale}
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* soft body shadow */}
      <ellipse cx="5" cy="8" rx="33" ry="40" fill="#b88860" opacity="0.14" />

      {/* balloon body */}
      <path
        d="M0 -52
           C28 -52 42 -28 42 -6
           C42 20 24 42 8 50
           C4 52 2 54 0 56
           C-2 54 -4 52 -8 50
           C-24 42 -42 20 -42 -6
           C-42 -28 -28 -52 0 -52Z"
        fill={fill}
      />
      {/* shade */}
      <path
        d="M10 -46
           C26 -42 36 -24 36 -4
           C36 18 22 36 10 46
           C20 28 26 10 24 -8
           C22 -26 16 -40 10 -46Z"
        fill={shade}
        opacity="0.32"
      />
      {/* gloss */}
      <ellipse cx="-15" cy="-22" rx="12" ry="17" fill={highlight} opacity="0.55" />
      <ellipse cx="-19" cy="-28" rx="4.2" ry="6.2" fill="#ffffff" opacity="0.5" />

      {/* rubber tip into knot */}
      <path
        d="M-5 54 C-3 61 3 61 5 54 L2.2 67 C1.2 70.5 -1.2 70.5 -2.2 67 Z"
        fill={shade}
      />
      {/* tied knot sitting on string start */}
      <ellipse cx="0" cy="56.5" rx="7.5" ry="3.4" fill={fill} />
      <ellipse cx="0" cy="56.5" rx="7.5" ry="3.4" fill={shade} opacity="0.4" />
      <ellipse cx="0" cy="67.5" rx="3.2" ry="2.1" fill={shade} opacity="0.85" />
    </g>
  );
}

export default function InviteDecor() {
  const gather = { x: 292, y: 458 };

  return (
    <div className="invite-decor" aria-hidden="true">
      <svg
        className="invite-decor-svg"
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafFill" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#8b3a3a" />
            <stop offset="45%" stopColor="#6a2828" />
            <stop offset="100%" stopColor="#4a1a1a" />
          </linearGradient>
          <linearGradient id="leafFill2" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#7a3232" />
            <stop offset="100%" stopColor="#3f1616" />
          </linearGradient>
          <filter id="balloonSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="shadowBlur" />
            <feOffset in="shadowBlur" dx="1.5" dy="4" result="shadowOffset" />
            <feFlood floodColor="#8a6040" floodOpacity="0.14" result="shadowColor" />
            <feComposite in="shadowColor" in2="shadowOffset" operator="in" result="shadow" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="soft" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="soft" />
            </feMerge>
          </filter>
          <filter id="leafShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="1"
              dy="2"
              stdDeviation="2"
              floodColor="#3a1515"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        <g className="balloon-cluster" filter="url(#balloonSoft)">
          <Balloon
            x={250}
            y={98}
            scale={0.9}
            rotate={-8}
            fill="#f0d2b6"
            shade="#c9926c"
            highlight="#fff6ee"
            gather={gather}
            curve={-24}
          />
          <Balloon
            x={322}
            y={132}
            scale={0.76}
            rotate={11}
            fill="#e8c4a4"
            shade="#c08460"
            highlight="#fff4ea"
            gather={gather}
            curve={30}
            opacity={0.97}
          />
          <Balloon
            x={206}
            y={172}
            scale={0.66}
            rotate={-13}
            fill="#f3d8c0"
            shade="#d0a07a"
            highlight="#fffaf4"
            gather={gather}
            curve={-34}
            opacity={0.93}
          />
          <Balloon
            x={294}
            y={208}
            scale={1.02}
            rotate={3}
            fill="#ecc6a8"
            shade="#c48a62"
            highlight="#fff7f0"
            gather={gather}
            curve={10}
          />
          <Balloon
            x={352}
            y={258}
            scale={0.7}
            rotate={15}
            fill="#e5b898"
            shade="#b87852"
            highlight="#fff2e6"
            gather={gather}
            curve={38}
            opacity={0.95}
          />
          <Balloon
            x={234}
            y={274}
            scale={0.72}
            rotate={-5}
            fill="#f2d4bc"
            shade="#c99470"
            highlight="#fff8f2"
            gather={gather}
            curve={-14}
            opacity={0.96}
          />
        </g>

        <g className="string-gather">
          <circle cx="292" cy="458" r="2.6" fill="#7a5a3a" opacity="0.4" />
          <path
            d="M286 452 C290 460 294 460 298 452"
            stroke="#7a5a3a"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
            opacity="0.45"
          />
        </g>

        <g filter="url(#leafShadow)" className="leaf-group">
          <path
            d="M250 392C243 362 255 332 285 300C268 332 264 362 268 398C262 388 256 382 250 392Z"
            fill="url(#leafFill)"
          />
          <path
            d="M268 314C264 344 266 374 271 404"
            stroke="#3a1515"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M300 412C288 377 302 340 340 302C318 340 310 377 315 422C308 410 304 404 300 412Z"
            fill="url(#leafFill2)"
          />
          <path
            d="M322 320C315 354 315 388 320 424"
            stroke="#2e1010"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M268 432C255 407 268 377 300 347C280 380 274 410 278 444C273 436 270 432 268 432Z"
            fill="url(#leafFill)"
            opacity="0.92"
          />
        </g>
      </svg>
    </div>
  );
}

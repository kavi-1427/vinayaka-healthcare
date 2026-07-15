const touchpoints = [
  { hour: 7, label: "Morning meds & tea", },
  { hour: 9, label: "Bathing & dressing" },
  { hour: 12, label: "Lunch & rest" },
  { hour: 15, label: "Walk & physio" },
  { hour: 18, label: "Evening chat & meds" },
  { hour: 20, label: "Dinner together" },
  { hour: 22, label: "Settle in for the night" },
  { hour: 2, label: "Night check-in" },
];

// Map an hour (0-24) to an x/y point on the circle
function pointOnCircle(hour, radius, cx, cy) {
  const angle = (hour / 24) * 2 * Math.PI - Math.PI / 2;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

export default function DayOfCare() {
  const width = 620;
  const height = 460;
  const cx = width / 2;
  const cy = height / 2;
  const ringR = 130;
  const dotR = 130;

  return (
    <div className="relative mx-auto" style={{ maxWidth: width }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="A 24-hour clock showing care touchpoints throughout the day and night">
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke="var(--color-sage-dark)" strokeWidth="1.5" strokeDasharray="2 7" />
        <circle cx={cx} cy={cy} r={ringR - 34} fill="var(--color-sage)" opacity="0.35" />

        {/* center label */}
        <text x={cx} y={cy - 8} textAnchor="middle" className="fill-pine-dark" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30 }}>
          24/7
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" className="fill-charcoal" opacity="0.55" style={{ fontFamily: "var(--font-body)", fontSize: 13 }}>
          someone is always there
        </text>

        {/* hour ticks */}
        {Array.from({ length: 24 }).map((_, h) => {
          const p1 = pointOnCircle(h, ringR + 6, cx, cy);
          const p2 = pointOnCircle(h, ringR + (h % 6 === 0 ? 16 : 11), cx, cy);
          return (
            <line
              key={h}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke="var(--color-pine)" strokeOpacity={h % 6 === 0 ? 0.55 : 0.25}
              strokeWidth={h % 6 === 0 ? 2 : 1}
            />
          );
        })}

        {/* touchpoints */}
        {touchpoints.map((t) => {
          const dot = pointOnCircle(t.hour, ringR, cx, cy);
          const labelPt = pointOnCircle(t.hour, dotR + 46, cx, cy);
          const isRight = labelPt.x > cx;
          return (
            <g key={t.hour}>
              <circle cx={dot.x} cy={dot.y} r="6" fill="var(--color-marigold)" stroke="var(--color-ivory)" strokeWidth="2" />
              <text
                x={labelPt.x}
                y={labelPt.y}
                textAnchor={isRight ? "start" : "end"}
                className="fill-charcoal"
                style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 500 }}
              >
                {t.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

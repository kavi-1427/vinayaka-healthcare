import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7, suffix: "+", label: "Years in service" },
  { value: 1200, suffix: "+", label: "Families served" },
  { value: 300, suffix: "+", label: "Verified caregivers" },
  { value: 38, suffix: "", label: "Districts covered in Tamil Nadu" },
];

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const duration = 1400;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [active, target]);
  return value;
}

function Stat({ value, suffix, label, active }) {
  const count = useCountUp(value, active);
  return (
    <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-semibold text-ivory">
        {count}{suffix}
      </p>
      <p className="mt-2 text-ivory/70 text-sm sm:text-[15px]">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-pine py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Stat key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}

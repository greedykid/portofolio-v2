'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { GitHubContribution } from '@/common/libs/github';

interface ContributionGridProps {
  contributions: GitHubContribution[];
}

const LEVEL_COLORS = [
  'bg-neutral-300/60 dark:bg-neutral-700/60', // level 0
  'bg-emerald-200 dark:bg-emerald-900', // level 1
  'bg-emerald-300 dark:bg-emerald-700', // level 2
  'bg-emerald-500 dark:bg-emerald-500', // level 3
  'bg-emerald-700 dark:bg-emerald-300', // level 4
];

const ContributionGrid = ({ contributions }: ContributionGridProps) => {
  const [selected, setSelected] = useState<{ date: string; count: number } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const weeks = useMemo(() => {
    if (contributions.length === 0) return [];
    // Sort ascending by date so `first` is the earliest and `last` is the latest.
    const sorted = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const byDate = new Map(sorted.map((c) => [c.date, c]));
    const first = new Date(sorted[0].date);
    const last = new Date(sorted[sorted.length - 1].date);
    const start = new Date(first);
    // Align to Sunday
    start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
    const cols: GitHubContribution[][] = [];
    const cursor = new Date(start);
    while (cursor <= last) {
      const col: GitHubContribution[] = [];
      for (let i = 0; i < 7; i++) {
        const iso = cursor.toISOString().slice(0, 10);
        col.push(byDate.get(iso) ?? { date: iso, count: 0, level: 0 });
        cursor.setDate(cursor.getDate() + 1);
      }
      cols.push(col);
    }
    return cols;
  }, [contributions]);

  // Scroll agar bulan berjalan terlihat saat pertama kali render
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || weeks.length === 0) return;
    const today = new Date().toISOString().slice(0, 10);
    let idx = weeks.findIndex((col) => col.some((d) => d.date === today));
    if (idx === -1) idx = weeks.length - 1;
    el.scrollLeft = Math.max(0, idx * 18 - el.clientWidth + 36);
  }, [weeks]);

  const monthLabels = useMemo(() => {
    const labels: { index: number; label: string }[] = [];
    weeks.forEach((col, i) => {
      const month = new Date(col[0].date).toLocaleDateString('en-US', { month: 'short' });
      const prevMonth = i > 0 ? new Date(weeks[i - 1][0].date).toLocaleDateString('en-US', { month: 'short' }) : null;
      if (month !== prevMonth) {
        labels.push({ index: i, label: month });
      }
    });
    return labels;
  }, [weeks]);

  const maxCount = useMemo(
    () => contributions.reduce((max, c) => (c.count > max ? c.count : max), 0),
    [contributions],
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        {/* Day labels */}
        <div className="flex shrink-0 flex-col pb-1.5 pr-1 text-[10px] text-neutral-500">
          <div className="flex flex-1 flex-col justify-between">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          {/* Spacer agar sejajar dengan baris label bulan */}
          <div className="mt-1 h-4" />
        </div>
        <div ref={scrollRef} className="overflow-x-auto pb-1.5">
          <div className="w-max">
            <div className="flex gap-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day, di) => (
                    <div
                      key={day.date}
                      className={`h-3.5 w-3.5 rounded ${LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]} ${
                        selected?.date === day.date ? 'ring-2 ring-teal-500' : ''
                      }`}
                      onClick={() =>
                        setSelected(selected?.date === day.date ? null : { date: day.date, count: day.count })
                      }
                      title={`${day.date}: ${day.count} kontribusi`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Month labels */}
            <div className="mt-1 flex h-4 gap-1 text-[10px] leading-4 text-neutral-500">
              {weeks.map((_, wi) => {
                const label = monthLabels.find((m) => m.index === wi)?.label;
                return (
                  <span key={wi} className="w-3.5 whitespace-nowrap">
                    {label ?? ''}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[12px]">
        <span className="text-neutral-500">
          {selected
            ? `${selected.date}: ${selected.count} kontribusi`
            : `${contributions.length > 0 ? maxCount : 0} kontribusi aktif`}
        </span>
        <div className="flex items-center gap-1 text-neutral-500">
          <span className="mr-1">Lebih sedikit</span>
          {LEVEL_COLORS.slice(0, 4).map((color) => (
            <span key={color} className={`h-3 w-3 ${color}`} />
          ))}
          <span className="ml-1">Lebih banyak</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGrid;

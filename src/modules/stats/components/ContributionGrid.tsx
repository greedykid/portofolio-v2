'use client';

import { useMemo, useState } from 'react';
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

  const weeks = useMemo(() => {
    if (contributions.length === 0) return [];
    const byDate = new Map(contributions.map((c) => [c.date, c]));
    const first = new Date(contributions[0].date);
    const last = new Date(contributions[contributions.length - 1].date);
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
        <div className="flex flex-col justify-between pr-1 text-[10px] text-neutral-500">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>
        <div className="overflow-x-auto pb-1">
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
        </div>
      </div>

      {/* Month labels */}
      <div className="flex gap-1 pl-6 text-[10px] text-neutral-500">
        {weeks.map((_, wi) => {
          const label = monthLabels.find((m) => m.index === wi)?.label;
          return <span key={wi} className="w-3.5">{label ?? ''}</span>;
        })}
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

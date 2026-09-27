import type { AcademyCourse } from '../../data/content';
import { CategoryStripe, CATEGORY_COLORS } from '../ui/primitives';
import { IconClock, IconLayers } from '../icons/icons';

export function CourseCard({ course }: { course: AcademyCourse }) {
  const color = CATEGORY_COLORS[course.categoryIndex];
  return (
    <div className="rounded-[22px] border border-line bg-white p-6 hover:-translate-y-[2px] hover:shadow-[0_18px_38px_-20px_rgba(10,10,10,.22)] transition-all duration-200">
      <CategoryStripe activeIndex={course.categoryIndex} />
      <div className="mt-5 flex items-center gap-2">
        <span
          className="font-script text-[10.5px] font-bold uppercase tracking-[.06em] rounded-full px-2.5 py-1 border"
          style={{ color, borderColor: `color-mix(in srgb, ${color} 35%, white)`, background: `color-mix(in srgb, ${color} 8%, white)` }}
        >
          {course.level}
        </span>
      </div>
      <div className="mt-3 text-[17px] font-bold tracking-[-.01em] text-ink">{course.title}</div>
      <p className="mt-1 text-[13.5px] text-ink-soft leading-relaxed">{course.subtitle}</p>
      <div className="mt-4 flex items-center gap-4 text-[12px] text-ink-faint">
        <span className="inline-flex items-center gap-1.5">
          <IconLayers size={13} /> {course.episodes} bölüm
        </span>
        <span className="inline-flex items-center gap-1.5">
          <IconClock size={13} /> {course.duration}
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-line-soft text-[12.5px] text-ink/70">
        Eğitmen: <span className="font-semibold text-ink">{course.instructor}</span>
      </div>
    </div>
  );
}

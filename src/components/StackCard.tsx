import type { iStack } from '../types/type';

interface StackCardProps {
  technology: iStack;
}

const StackCard = ({ technology }: StackCardProps) => {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-7 w-7 object-contain"
        />

        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-base font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-xs leading-[18px] text-slate-500">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="mt-4 border-t border-slate-100" />

      {/* Meta information */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">

        <span className="rounded bg-slate-100 px-2 py-1">
          {technology.category}
        </span>

        <span>
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>

      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-4 w-full rounded-md bg-slate-950 py-2.5 text-xs font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>

    </div>
  );
};

export default StackCard;
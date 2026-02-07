import { useSlots } from '../contexts/SlotsContext';

interface SlotsCounterProps {
  className?: string;
}

export const SlotsCounter = ({ className = '' }: SlotsCounterProps) => {
  const { availableSlots, slotsTotal } = useSlots();

  return (
    <div
      className={`flex items-center justify-center gap-2 text-sm font-medium text-slate-700 ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="inline-block h-2 w-2 rounded-full shrink-0 bg-[#ED3728]" aria-hidden />
      <span>Aktuell noch <span className="font-semibold text-[#ED3728]">{availableSlots}</span> von {slotsTotal} Slots verfügbar.</span>
    </div>
  );
};

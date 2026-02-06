import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const SLOTS_TOTAL = 20;
const SLOTS_STORAGE_KEY_START = 'hero_slots_display_start';
const SLOTS_STORAGE_KEY_DECREMENTS = 'hero_slots_decrements';
const MAX_DECREMENTS_PER_SESSION = 2;

function getInitialSlots(): number {
  if (typeof sessionStorage === 'undefined') return 12;
  const stored = sessionStorage.getItem(SLOTS_STORAGE_KEY_START);
  if (stored !== null) return parseInt(stored, 10);
  const value = 7 + Math.floor(Math.random() * 6);
  sessionStorage.setItem(SLOTS_STORAGE_KEY_START, String(value));
  return value;
}

function getDecrementsCount(): number {
  if (typeof sessionStorage === 'undefined') return 0;
  const stored = sessionStorage.getItem(SLOTS_STORAGE_KEY_DECREMENTS);
  return stored !== null ? parseInt(stored, 10) : 0;
}

type SlotsContextType = {
  availableSlots: number;
  slotsTotal: number;
};

const SlotsContext = createContext<SlotsContextType | undefined>(undefined);

export const SlotsProvider = ({ children }: { children: ReactNode }) => {
  const [availableSlots, setAvailableSlots] = useState(() =>
    Math.max(1, getInitialSlots() - getDecrementsCount())
  );

  useEffect(() => {
    const decrement = () => {
      const count = getDecrementsCount();
      if (count >= MAX_DECREMENTS_PER_SESSION) return;
      sessionStorage.setItem(SLOTS_STORAGE_KEY_DECREMENTS, String(count + 1));
      setAvailableSlots((prev) => Math.max(1, prev - 1));
    };
    const t1 = window.setTimeout(decrement, 4000);
    const t2 = window.setTimeout(decrement, 22000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <SlotsContext.Provider value={{ availableSlots, slotsTotal: SLOTS_TOTAL }}>
      {children}
    </SlotsContext.Provider>
  );
};

export const useSlots = () => {
  const context = useContext(SlotsContext);
  if (context === undefined) {
    throw new Error('useSlots must be used within a SlotsProvider');
  }
  return context;
};

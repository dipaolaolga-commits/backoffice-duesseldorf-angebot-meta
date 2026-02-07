import { motion } from 'framer-motion';

interface AnimatedCTAButtonProps {
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const AnimatedCTAButton = ({
  onClick,
  disabled = false,
  children,
  className = '',
  fullWidth = false,
}: AnimatedCTAButtonProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.12, ease: 'easeOut' }}
    className={`group relative overflow-hidden rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-150 disabled:opacity-75 ${fullWidth ? 'w-full' : 'inline-flex items-center justify-center'} px-8 py-4 text-lg bg-[#1e3a8a] hover:bg-[#172554] ${className}`}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  </motion.button>
);

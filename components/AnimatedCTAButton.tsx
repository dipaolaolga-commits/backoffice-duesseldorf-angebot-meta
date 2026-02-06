import { motion } from 'framer-motion';

interface AnimatedCTAButtonProps {
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const gradientStyle = {
  background: 'linear-gradient(115deg, #2563eb 0%, #4f46e5 35%, #6366f1 65%, #2563eb 100%)',
  backgroundSize: '200% 200%',
  boxShadow: '0 10px 40px -10px rgba(37, 99, 235, 0.5), 0 4px 15px -3px rgba(0,0,0,0.1)',
  animation: 'heroCtaGradient 4s ease infinite',
} as const;

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
    whileHover={{ scale: 1.03, y: -3 }}
    whileTap={{ scale: 0.98 }}
    className={`group relative overflow-hidden rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 disabled:opacity-75 ${fullWidth ? 'w-full' : 'inline-flex items-center justify-center'} px-8 py-4 text-lg ${className}`}
    style={gradientStyle}
  >
    <motion.div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
        width: '60%',
      }}
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
    />
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  </motion.button>
);

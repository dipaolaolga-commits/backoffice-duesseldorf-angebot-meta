import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = '', isScrolled = false }: LogoProps) => {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className={`relative flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br ${
          isScrolled 
            ? 'from-blue-600 via-indigo-600 to-blue-700' 
            : 'from-blue-700 via-indigo-700 to-blue-800'
        } shadow-xl overflow-hidden`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Modern Logo Icon - Shield with Checkmark */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Shield shape */}
          <path
            d="M14 2L4 6V13C4 18.5 8.5 23.5 14 25C19.5 23.5 24 18.5 24 13V6L14 2Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Inner highlight */}
          <path
            d="M14 4L6 7V13C6 17.5 9.5 21.5 14 22.5C18.5 21.5 22 17.5 22 13V7L14 4Z"
            fill="white"
            fillOpacity="0.3"
          />
          {/* Checkmark */}
          <path
            d="M10 14L12.5 16.5L18 11"
            stroke="#3b82f6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold ${
          isScrolled ? 'text-slate-900' : 'text-slate-900'
        } leading-tight tracking-tight`}>
          Backoffice
        </span>
        <span className={`text-xs font-semibold ${
          isScrolled ? 'text-blue-600' : 'text-blue-700'
        } leading-tight -mt-0.5 tracking-wide`}>
          Düsseldorf
        </span>
      </div>
    </motion.div>
  );
};


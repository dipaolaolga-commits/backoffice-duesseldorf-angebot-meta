import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export const LoadingOverlay = ({ isVisible, message }: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center relative overflow-hidden"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Dekorative Elemente */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient-Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -mr-64 -mt-64"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-3xl -ml-64 -mb-64"
            />
            
            {/* Subtiles Punktmuster */}
            <div className="absolute inset-0 opacity-[0.1]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-10 max-w-md mx-auto px-6"
          >
            {/* Logo mit Puls-Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                opacity: { duration: 0.3 },
                scale: { 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="mb-8"
            >
              <div className="flex justify-center [&_span]:!text-white [&_.text-blue-600]:!text-blue-300 [&_.text-blue-700]:!text-blue-300">
                <Logo isScrolled={false} />
              </div>
            </motion.div>

            {/* Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto"
              >
                <Loader2 className="w-full h-full text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg"
            >
              Ihre Anfrage startet jetzt
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-blue-50 leading-relaxed drop-shadow-md"
            >
              Beantworte ein paar kurze Fragen – deine persönliche Auswertung ist gleich bereit.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

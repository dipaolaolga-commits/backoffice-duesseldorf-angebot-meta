import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  navigateWithLoading: (navigateFn: () => void, delay?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigateWithLoading = (navigateFn: () => void, delay: number = 0) => {
    // Direkte Navigation ohne Overlay
    navigateFn();
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading: setIsLoading, navigateWithLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  variant?: 'default' | 'footer';
}

export const Logo = ({ className = '', isScrolled = false, variant = 'default' }: LogoProps) => {
  const logoSrc = variant === 'footer' 
    ? '/assets/Logo-Backoffice-Servce-footer.png'
    : '/assets/Logo-Backoffice-Servce.png';
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc}
        alt="Backoffice Service Logo"
        className="h-20 lg:h-24 w-auto object-contain"
        loading="eager"
      />
    </div>
  );
};

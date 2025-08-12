import logoImage from '@assets/IMG_3349_1755017099360.jpeg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'hero' | 'header' | 'footer';
}

export default function Logo({ className = "", size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-20 w-auto'
  };

  const variantClasses = {
    default: '',
    hero: 'drop-shadow-2xl rounded-lg bg-white/10 backdrop-blur-sm p-3 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105',
    header: 'rounded-md shadow-sm transition-transform duration-200 hover:scale-105',
    footer: 'rounded opacity-90 transition-opacity duration-200 hover:opacity-100'
  };

  return (
    <img
      src={logoImage}
      alt="Croxley Tyres Logo"
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    />
  );
}
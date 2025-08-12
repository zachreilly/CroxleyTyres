import logoImage from '@assets/IMG_3349_1755017099360.jpeg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto'
  };

  return (
    <img
      src={logoImage}
      alt="Croxley Tyres Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}
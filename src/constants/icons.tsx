import {
  Gauge,
  Github,
  PaintBucket,
  Layout,
  Moon,
  Rocket,
  Shield,
  Type
} from 'lucide-react';

export const GithubIcon = ({ className, ...props }: { className?: string }) => (
  <Github className={className || 'h-5 w-5'} {...props} />
);

export const RocketIcon = ({ className, ...props }: { className?: string }) => (
  <Rocket className={className || 'h-5 w-5'} {...props} />
);

// Feature icons
export const LayoutIcon = ({ className, ...props }: { className?: string }) => (
  <Layout className={className || 'h-5 w-5'} {...props} />
);

export const TypeIcon = ({ className, ...props }: { className?: string }) => (
  <Type className={className || 'h-5 w-5'} {...props} />
);

export const TailwindIcon = ({
  className,
  ...props
}: {
  className?: string;
}) => <PaintBucket className={className || 'h-5 w-5'} {...props} />;

export const ShieldIcon = ({ className, ...props }: { className?: string }) => (
  <Shield className={className || 'h-5 w-5'} {...props} />
);

export const GaugeIcon = ({ className, ...props }: { className?: string }) => (
  <Gauge className={className || 'h-5 w-5'} {...props} />
);

export const MoonIcon = ({ className, ...props }: { className?: string }) => (
  <Moon className={className || 'h-5 w-5'} {...props} />
);

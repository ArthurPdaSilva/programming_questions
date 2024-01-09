export interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return <div style={{ width: '100vw', height: '100vh', background: '#0C0F0A' }}>{children}</div>;
}

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-widest text-accent-primary mb-8 lg:hidden">
      <span>{title}</span>
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

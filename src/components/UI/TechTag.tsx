interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-glow px-3 py-1 text-xs font-medium text-accent-primary">
      {label}
    </span>
  );
}

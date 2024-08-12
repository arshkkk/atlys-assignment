export function FormHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-medium text-sm text-textMuted">{title}</h2>
      <h1 className="mt-1 font-semibold text-lg text-white">{subtitle}</h1>
    </div>
  );
}

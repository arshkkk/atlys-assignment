export function UserInfo({
  image,
  name,
  postedOn,
}: {
  image: string;
  name: string;
  postedOn: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <img src={image} className="rounded-full w-11 h-11" alt={name} />
      <div>
        <p className="font-medium text-base text-textForeground">{name}</p>
        <p className="text-placeholderText text-sm">{postedOn}</p>
      </div>
    </div>
  );
}

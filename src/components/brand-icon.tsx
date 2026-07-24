export function BrandIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      aria-hidden="true"
      className={className}
      loading="lazy"
    />
  );
}

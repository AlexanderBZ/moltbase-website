import Image from "next/image";

interface ContentBlockProps {
  title: string;
  subtitle?: string;
  items?: string[];
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export function ContentBlock({
  title,
  subtitle,
  items,
  logo,
}: ContentBlockProps) {
  return (
    <div className="flex flex-col gap-3">
      {logo && (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width ?? 40}
          height={logo.height ?? 40}
          className="mb-2"
        />
      )}
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-md text-muted-foreground">{subtitle}</p>}
      {items && items.length > 0 && (
        <ol className="mt-2 list-decimal list-inside space-y-1 text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="text-md">
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

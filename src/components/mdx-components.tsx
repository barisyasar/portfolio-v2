import Image from "next/image";
import { CopyCode } from "./ui/copy-code";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="my-4 text-4xl font-bold tracking-tight">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="my-4 text-3xl font-bold tracking-tight">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="my-4 text-2xl font-bold tracking-tight">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="my-4 text-xl font-bold tracking-tight">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mt-2">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-4 border-card-border pl-6 italic">
      {children}
    </blockquote>
  ),
  img: ({
    src,
    alt,
    width = 800,
    height = 400,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }) => (
    <div className="my-4 overflow-hidden rounded-lg border">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="aspect-video object-cover"
      />
    </div>
  ),
  pre: ({ children, ...props }: { children: React.ReactNode }) => {
    // @ts-ignore
    const code = children?.props?.children || "";
    return (
      <div className="group relative my-4">
        <pre
          className="mb-4 mt-6 overflow-x-auto rounded-lg border py-4 px-3 card--5"
          {...props}
        >
          {children}
        </pre>
        <CopyCode code={code} />
      </div>
    );
  },
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="relative rounded text-sm">{children}</code>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">{children}</table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8" />,
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

export default components;

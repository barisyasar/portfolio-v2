import { SVGProps } from 'react';

export default function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="size-8"
      {...props}
    >
      <path fill="currentColor" d="M23 21.648H1L12 2.352z"></path>
    </svg>
  );
}

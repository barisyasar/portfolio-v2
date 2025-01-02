import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./Icons";

function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <a target="_blank" href="https://www.linkedin.com/in/barisyasar5/">
        <LinkedinIcon className="size-8 xs:size-10" />
      </a>
      <a target="_blank" href="https://github.com/barisyasar">
        <GithubIcon className="size-8 xs:size-10" />
      </a>
    </div>
  );
}

export default SocialMedia;

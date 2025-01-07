"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CopyCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
}

export function CopyCode({ code, className, ...props }: CopyCodeProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("absolute right-4 top-4", className)} {...props}>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 hover:bg-background/30"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3 w-3 text-green-500" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}

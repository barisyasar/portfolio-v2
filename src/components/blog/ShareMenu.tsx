'use client';

import { Share as ShareIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from '../Icons';

interface ShareMenuProps {
  url: string;
  title: string;
}

export function ShareMenu({ url, title }: ShareMenuProps) {
  console.log(url);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="absolute bottom-2 right-2"
        >
          <ShareIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex min-w-10 flex-col items-center gap-4 py-2"
        side="top"
      >
        <DropdownMenuItem asChild>
          <FacebookShareButton url={url} title={title}>
            <FacebookIcon className="!size-5" />
          </FacebookShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon className="!size-5" />
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon className="!size-5" />
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon className="!size-5" />
          </WhatsappShareButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

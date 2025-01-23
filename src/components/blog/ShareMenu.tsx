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
      <DropdownMenuContent align="end" className="w-[180px]">
        <DropdownMenuItem
          asChild
          className="flex cursor-pointer items-center gap-2 px-3 py-2"
        >
          <FacebookShareButton
            url={url}
            title={title}
            className="flex w-full items-center gap-2"
          >
            <FacebookIcon className="size-5" />
            <span>Facebook</span>
          </FacebookShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex cursor-pointer items-center gap-2 px-3 py-2"
        >
          <TwitterShareButton
            url={url}
            title={title}
            className="flex w-full items-center gap-2"
          >
            <TwitterIcon className="size-5" />
            <span>Twitter</span>
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex cursor-pointer items-center gap-2 px-3 py-2"
        >
          <LinkedinShareButton
            url={url}
            title={title}
            className="flex w-full items-center gap-2"
          >
            <LinkedinIcon className="size-5" />
            <span>LinkedIn</span>
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex cursor-pointer items-center gap-2 px-3 py-2"
        >
          <WhatsappShareButton
            url={url}
            title={title}
            className="flex w-full items-center gap-2"
          >
            <WhatsappIcon className="size-5" />
            <span>WhatsApp</span>
          </WhatsappShareButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

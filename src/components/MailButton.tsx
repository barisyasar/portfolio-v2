'use client';
import { GmailIcon } from './Icons';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

function MailButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="fixed bottom-4 left-4 z-50"
    >
      <Button
        asChild
        className={
          'rounded-full transition-transform duration-300 hover:translate-y-[-2px]'
        }
        size="icon"
      >
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_MAIL}?subject=${encodeURIComponent('Contact mail from website')}`}
        >
          <GmailIcon className="size-8 xs:size-10" />
        </a>
      </Button>
    </motion.div>
  );
}

export default MailButton;

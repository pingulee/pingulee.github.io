import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import IconInstagram from '@/components/icon/Instagram';

export const Footer = () => {
  return (
    <footer className='mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/pingulee' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
        <Link href='https://www.instagram.com/leepingu' target='_blank'>
          <IconInstagram
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        Copyright © 2023. <span className='font-semibold'>pingulee</span> all rights reserved.
      </div>
    </footer>
  );
};

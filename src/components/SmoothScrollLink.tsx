"use client";

import Link from 'next/link';
import type { LinkProps } from 'next/link';
import React from 'react';
import type { PropsWithChildren } from 'react';

type SmoothScrollLinkProps = LinkProps & PropsWithChildren<{
  className?: string; 
}>;

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ href, children, className, ...props }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.toString().replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link href={href} {...props} onClick={handleScroll} className={className}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink; 
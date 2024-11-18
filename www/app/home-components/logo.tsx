import React from 'react';
import Image, { ImageProps } from 'next/image';

type LogoProps = Omit<ImageProps, 'src' | 'alt'> & { width?: number; height?: number };

export const Logo = ({ width = 52, height = 52, ...props }: LogoProps) => {
  return <Image src="/logo.svg" alt="logo" width={width} height={height} {...props} />;
};

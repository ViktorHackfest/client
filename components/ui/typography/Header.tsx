import { WindowSize } from '@components/hooks/';
import { ReactNode } from 'react';
import { responsive } from 'utils';

type HeaderPreset = 't1' | 't2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeaderWeight = 'bold' | 'regular' | 'light';

type HeaderProps = {
  className?: string;
  preset: HeaderPreset;
  children: ReactNode;
  weight: HeaderWeight;
};

export const Header = ({
  className,
  preset,
  children,
  weight,
}: HeaderProps) => {
  return (
    <h1
      className={`${
        preset === 't1'
          ? 'text-[4.5rem]' // 72px
          : preset === 't2'
          ? 'text-[3.75rem]' // 60 px
          : preset === 'h1'
          ? 'text-[3rem]' // 48 px
          : preset === 'h2'
          ? 'text-[2.25rem]' // 36 px
          : preset === 'h3'
          ? 'text-[2rem]' // 32 px
          : preset === 'h4'
          ? 'text-[1.75rem]' // 28 px
          : preset === 'h5'
          ? 'text-[1.5rem]' // 24 px
          : 'text-[1.25rem]' // 20 px (h6)
      }
      
      ${
        weight === 'bold'
          ? 'font-bold'
          : weight === 'regular'
          ? 'font-normal'
          : 'font-light'
      }}
      
      ${className}`}
    >
      {children}
    </h1>
  );
};

interface HeaderResponsiveProps extends HeaderProps {
  presetDesktop?: HeaderPreset;
  windowSize: WindowSize;
}

/** Responsive header that changes its preset according to viewport */
// see example in pages/arutala.tsx
export const HeaderResponsive = ({
  preset,
  presetDesktop,
  windowSize,
  ...props
}: HeaderResponsiveProps) => {
  const presetResponsive = responsive<HeaderPreset>(
    windowSize,
    preset,
    presetDesktop
  );
  return <Header preset={presetResponsive} {...props} />;
};

// References
// https://nekocalc.com/px-to-rem-converter

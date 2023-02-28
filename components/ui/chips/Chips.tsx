import { useWindowSize } from '@hooks';
import React from 'react';
import { BUTTON_PRESETS } from './Chips.presets';
type ChipsProps = {
  className?: string;

  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  padding?: string;

  leftIcon?: React.SVGAttributes<SVGElement>;
  rightIcon?: React.SVGAttributes<SVGElement>;

  preset: 'success' | 'info' | 'warning' | 'danger' | 'default' | 'input';

  children?: React.ReactNode;
  [props: string]: any;
};

export const Chips = ({
  children,
  className,
  preset,
  padding,
  leftIcon,
  rightIcon,
  ...props
}: ChipsProps) => {
  const { width } = useWindowSize();
  return (
    <button
      className={`transition-all flex justify-center items-center gap-2 
      ${BUTTON_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${BUTTON_PRESETS[preset].color} 
      ${padding ? padding : 'py-3 px-5'} 
      ${className}`}
      {...props}
    >
      {leftIcon ? <>{leftIcon}</> : null}

      <div>{children}</div>
      {rightIcon ? <>{rightIcon}</> : null}
    </button>
  );
};

import { WindowSize } from '@hooks';
import { responsive } from '@utils';
import { ReactNode } from 'react';

type BodyPreset = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'c1' | 'c2' | 'f';

type BodyProps = {
  className?: string;
  preset: BodyPreset;
  children: ReactNode;
};

export const Body = ({ className, children, preset }: BodyProps) => {
  return (
    <p
      className={`${
        preset === 'b1'
          ? 'text-[1.5rem]' // 24px
          : preset === 'b2'
          ? 'text-[1.25rem]' // 20px
          : preset === 'b3'
          ? 'text-[1rem]' // 16px
          : preset === 'b4'
          ? 'text-[0.875rem]' // 14px
          : preset === 'b5'
          ? 'text-[0.75rem]' // 12px
          : preset === 'c1'
          ? 'text-[0.75rem] text-gray-300 font-semibold' // 12px
          : preset === 'c2'
          ? 'text-[0.688rem] text-gray-300 font-semibold' // 11px
          : 'text-[0.625rem] text-gray-300 font-semibold' // 10px
      } 
      ${className}`}
    >
      {children}
    </p>
  );
};

interface BodyResponsiveProps extends BodyProps {
  preset: BodyPreset;
  presetTablet?: BodyPreset;
  presetDesktop?: BodyPreset;
  windowSize: WindowSize;
}

/** Body having presets that changes according to viewport */
export const BodyResponsive = ({
  preset,
  presetDesktop,
  windowSize,
  ...props
}: BodyResponsiveProps) => {
  const presetResponsive = responsive<BodyPreset>(
    windowSize,
    preset,
    presetDesktop
  );
  return <Body preset={presetResponsive} {...props} />;
};

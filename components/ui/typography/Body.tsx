import { WindowSize } from '@hooks';
import { responsive } from '@utils';
import { ReactNode } from 'react';

type BodyPreset = 'p1' | 'p2' | 'p3' | 'b1' | 'b2' | 'b3';

type BodyProps = {
  className?: string;
  preset: BodyPreset;
  children: ReactNode;
};

export const Body = ({ className, children, preset }: BodyProps) => {
  // if preset contains b
  const semiBold = preset.includes('b') ? 'font-semibold' : 'font-jakarta-sans';
  const presetFinal = preset.includes('b') ? preset.replace('b', 'p') : preset;
  return (
    <p
      className={`${
        presetFinal === 'p1'
          ? 'text-[1.5rem]'
          : presetFinal === 'p2'
          ? 'text-[1rem]'
          : 'text-[0.75rem]'
      } ${semiBold} ${className}`}
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
  presetTablet,
  presetDesktop,
  windowSize,
  ...props
}: BodyResponsiveProps) => {
  const presetResponsive = responsive<BodyPreset>(
    windowSize,
    preset,
    presetTablet,
    presetDesktop
  );
  return <Body preset={presetResponsive} {...props} />;
};

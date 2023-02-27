import React from 'react';

import { Box, VStack } from '@chakra-ui/react';
import { useWindowSize } from '@hooks';
import { Header } from '@ui';

type CardProps = {
  className?: string;

  icon?: React.SVGAttributes<SVGElement>;
  padding?: string;
  preset: 'dark' | 'light';
  children?: React.ReactNode;
};

export const Card = ({
  children,
  className,
  preset,
  padding,
  icon,
}: CardProps) => {
  const { width } = useWindowSize();
  return (
    <div
      className={`transition-all gap-2 rounded-3xl ${
        preset === 'dark' ? 'bg-red-400' : 'bg-white'
      } 
      ${padding ? padding : 'p-10'}
      ${className}`}
    >
      <VStack alignItems="start">
        {icon ? <>{icon}</> : null}

        <Box>
          <Header
            preset={width >= 1280 ? 'h4' : width >= 768 ? 'h5' : 'h6'}
            className={`${preset === 'dark' ? 'text-white' : 'text-gray-700'}`}
          >
            {children}
          </Header>
        </Box>
      </VStack>
    </div>
  );
};

import React from 'react';

import { Box, VStack } from '@chakra-ui/react';
import { useWindowSize } from '@hooks';

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
          <div
            className={`${preset === 'dark' ? 'text-white' : 'text-gray-700'}`}
          >
            {children}
          </div>
        </Box>
      </VStack>
    </div>
  );
};

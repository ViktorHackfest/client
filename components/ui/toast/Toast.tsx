import { Box, useToast } from '@chakra-ui/react';
// import { XIcon } from '@heroicons/react/outline';
import { Header } from '@ui';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { TOAST_PRESETS } from './Toast.presets';

export type ToastProps = {
  preset: 'error' | 'warning' | 'success' | 'info';
  message: React.ReactNode | string;
};

export const Toast = ({ preset, message }: ToastProps) => {
  console.log('TEST');
  const toast = useToast({
    position: 'bottom-right',
    duration: 6000,
    render: ({ onClose }) => {
      return (
        <Box
          className={`
          transition-all flex justify-between items-center gap-2 py-3 px-5
          ${TOAST_PRESETS[preset].text} md:text-base text-sm font-semibold 
          ${TOAST_PRESETS[preset].border} 
          ${TOAST_PRESETS[preset].borderWidth} 
          ${TOAST_PRESETS[preset].borderColor}
          ${TOAST_PRESETS[preset].color}`}
        >
          <>
            {TOAST_PRESETS[preset].image}
            <Header preset="h6">{message}</Header>
            <button onClick={onClose}>
              <GrClose className="h-6 w-6" />
            </button>
          </>
        </Box>
      );
    },
  });

  return toast;
};

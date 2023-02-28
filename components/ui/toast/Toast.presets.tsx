import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';

type ToastStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  image: React.SVGAttributes<SVGElement>;
};

type ToastPresetProps = {
  [key: string]: ToastStyleProps;
};

export const TOAST_PRESETS: ToastPresetProps = {
  error: {
    border: 'rounded-xl',
    borderWidth: 'border-2',
    color: 'bg-red-500/20 active:bg-red-100 backdrop-blur-sm',
    text: 'text-red-600',
    borderColor: 'border-red-600 active:border-red-600',
    image: <BsFillExclamationTriangleFill className="w-6 h-6" />,
  },
  warning: {
    border: 'rounded-xl',
    borderWidth: 'border-2',
    color: 'bg-yellow-500/20 active:bg-yellow-100 backdrop-blur-sm',
    text: 'text-yellow-500',
    borderColor: 'border-yellow-500 active:border-yellow-500',
    image: <MdError className="w-6 h-6" />,
  },
  success: {
    border: 'rounded-xl',
    borderWidth: 'border-2',
    color: 'bg-green-500/20 active:bg-green-100 backdrop-blur-sm',
    text: 'text-green-500',
    borderColor: 'border-green-500 active:border-green-500',
    image: <BiCheckCircle className="w-6 h-6" />,
  },
  info: {
    border: 'rounded-xl',
    borderWidth: 'border-2',
    color: 'bg-blue-500/20 active:bg-blue-500 backdrop-blur-sm',
    text: 'text-blue-500',
    borderColor: 'border-blue-500 active:border-blue-500',
    image: <AiFillInfoCircle className="w-6 h-6" />,
  },
};

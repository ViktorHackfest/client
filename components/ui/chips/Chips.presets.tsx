type ChipsStyleProps = {
  color: string;
  text: string;
};

type ChipsPresetProps = {
  [key: string]: ChipsStyleProps;
};

export const BUTTON_PRESETS: ChipsPresetProps = {
  success: {
    color: 'bg-green-200 rounded-xl',
    text: 'text-green-600',
  },
  info: {
    color: 'bg-blue-200 rounded-xl',
    text: 'text-blue-600',
  },
  warning: {
    color: 'bg-yellow-200 rounded-xl',
    text: 'text-yellow-600',
  },
  danger: {
    color: 'bg-red-200 rounded-xl',
    text: 'text-red-600',
  },
  default: {
    color: 'bg-red-500 rounded-xl',
    text: 'text-white',
  },
  input: {
    color: 'bg-gray-200 rounded-xl',
    text: 'text-black',
  },
};

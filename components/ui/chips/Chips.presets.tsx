type ChipsStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
};

type ChipsPresetProps = {
  [key: string]: ChipsStyleProps;
};

export const BUTTON_PRESETS: ChipsPresetProps = {
  primary: {
    border: 'rounded-md',
    borderWidth: 'border-0',
    color: 'bg-red-400 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]',
    hover: 'hover:shadow-xl shadow-dark-denim',
    text: 'text-gray-700',
    borderColor: '',
    disabled:
      'disabled:bg-gray-400  disabled:text-gray-300 disabled:hover:shadow-none',
  },
  secondary: {
    border: 'rounded-md',
    borderWidth: 'border-0',
    color:
      'bg-gray-500 active:bg-gray-600 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]',
    hover: 'hover:shadow-lg hover:shadow-powder',
    text: 'text-white font-light',
    borderColor: '',
    disabled:
      'disabled:bg-gray-400  disabled:text-gray-300 disabled:hover:shadow-none',
  },
  tertiary: {
    border: 'rounded-md',
    borderWidth: 'border-2',
    color: 'bg-transparent',
    hover: 'hover:bg-red-400/25',
    text: 'text-red-400',
    borderColor: 'border-red-400',
    disabled: 'disabled:border-gray-500 disabled:text-gray-500',
  },
  text: {
    border: 'rounded-md',
    borderWidth: '',
    color: 'bg-transparent',
    hover: 'hover:underline active:underline',
    text: 'text-red-400',
    borderColor: '',
    disabled: 'disabled:text-gray-400 disabled:no-underline',
  },
};

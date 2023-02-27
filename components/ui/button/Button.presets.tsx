type ButtonStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
  hover: string;
  disabled: string;
};

type ButtonPresetProps = {
  [key: string]: ButtonStyleProps;
};

export const BUTTON_PRESETS: ButtonPresetProps = {
  primary: {
    border: 'rounded-lg',
    borderWidth: 'border-2',
    color: 'bg-denim-dark active:bg-denim-light',
    hover: 'hover:shadow-xl shadow-dark-denim',
    text: 'text-totalwhite',
    borderColor: 'border-denim-dark active:border-denim-dark/0',
    disabled:
      'disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none',
  },
  secondary: {
    border: 'rounded-lg',
    borderWidth: 'border-2',
    color: 'bg-totalwhite active:bg-powder',
    hover: 'hover:shadow-lg hover:shadow-powder',
    text: 'text-dark-denim',
    borderColor: 'border-totalwhite active:border-totalwhite/0',
    disabled:
      'disabled:bg-grey-soft  disabled:border-grey-soft disabled:text-grey disabled:hover:shadow-none',
  },
  tertiary: {
    border: 'rounded-lg',
    borderWidth: 'border-2',
    color: 'bg-transparent active:bg-powder/60',
    hover: 'hover:bg-powder/60',
    text: 'text-totalwhite',
    borderColor: 'border-powder active:border-powder/0',
    disabled: 'disabled:border-grey disabled:text-grey disabled:bg-denim-dark',
  },
  text: {
    border: 'rounded-lg',
    borderWidth: 'border-2',
    color: 'bg-transparent active:bg-denim-light/40',
    hover: 'hover:bg-denim-light/40',
    text: 'text-denim-dark',
    borderColor: 'border-denim-light active:border-denim-light/0',
    disabled: 'disabled:border-grey disabled:text-grey disabled:bg-totalwhite',
  },
};

// import {

type ToastStyleProps = {
  color: string;
  text: string;
  border: string;
  borderWidth: string;
  borderColor: string;
};

type ToastPresetProps = {
  [key: string]: ToastStyleProps;
};

export const TOAST_PRESETS: ToastPresetProps = {
  error: {
    border: 'rounded-3xl',
    borderWidth: 'border-2',
    color: 'bg-danger-dark/20 active:bg-danger-light backdrop-blur-sm',
    text: 'text-danger-dark',
    borderColor: 'border-danger-dark active:border-danger-dark',
  },
  warning: {
    border: 'rounded-3xl',
    borderWidth: 'border-2',
    color: 'bg-warning-dark/20 active:bg-warning-light backdrop-blur-sm',
    text: 'text-warning-dark',
    borderColor: 'border-warning-dark active:border-warning-dark',
  },
  success: {
    border: 'rounded-3xl',
    borderWidth: 'border-2',
    color: 'bg-success-dark/20 active:bg-success-dark backdrop-blur-sm',
    text: 'text-success-dark',
    borderColor: 'border-success-dark active:border-success-dark',
  },
  info: {
    border: 'rounded-3xl',
    borderWidth: 'border-2',
    color: 'bg-cerulean/20 active:bg-cerulean backdrop-blur-sm',
    text: 'text-cerulean',
    borderColor: 'border-cerulean active:border-cerulean',
  },
};

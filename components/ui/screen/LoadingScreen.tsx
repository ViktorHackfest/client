type LoadingScreenProps = {
  className?: string;
};
export const LoadingScreen = ({ className }: LoadingScreenProps) => {
  return <div className={className}>Loading...</div>;
};

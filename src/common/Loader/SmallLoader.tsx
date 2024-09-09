import React from 'react';

const SmallLoader: React.FC<{ size?: string; borderThickness?: string; color?: string; borderColor?: string }> = ({
  size = 'h-5 w-5',
  borderThickness = 'border-2',
  color = 'border-while',
  borderColor = 'border-t-transparent',
}) => {
  return (
    <div
      className={`${size} animate-spin rounded-full ${borderThickness} border-solid ${color} ${borderColor} dark:bg-opacity-10`}
    ></div>
  );
};

export default SmallLoader;

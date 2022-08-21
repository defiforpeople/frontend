import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export const BlurMobile = (props: IconProps) => {
  return (
    <Icon
      width="50%"
      zIndex="-1"
      height="50%"
      xmlns="http://www.w3.org/2000/svg"
      display={['block', 'none', 'none']}
      {...props}
    >
      {/* blue */}
      <circle cx="0" cy="0" r="10" fill="#4A64A8" />
    </Icon>
  );
};

export default BlurMobile;

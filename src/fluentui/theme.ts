import { createDarkTheme, createLightTheme } from '@fluentui/react-components';

import type { BrandVariants, Theme } from '@fluentui/react-components';

export interface ContentProps {
  lightTheme: Theme;
  darkTheme: Theme;
}
const myTheme: BrandVariants = {
  10: '#060200',
  20: '#261108',
  30: '#42170E',
  40: '#581C11',
  50: '#702014',
  60: '#882316',
  70: '#A12518',
  80: '#BB271A',
  90: '#D6291B',
  100: '#E1442E',
  110: '#E95E45',
  120: '#F0765B',
  130: '#F68C73',
  140: '#FAA18B',
  150: '#FEB6A3',
  160: '#FFCABD',
};
const lightTheme: Theme = {
  ...createLightTheme(myTheme),
};

const darkTheme: Theme = {
  ...createDarkTheme(myTheme),
};

darkTheme.colorBrandForeground1 = myTheme[110]; // use brand[110] instead of brand[100]
darkTheme.colorBrandForeground2 = myTheme[120]; // use brand[120] instead of brand[110]

export default { lightTheme, darkTheme };

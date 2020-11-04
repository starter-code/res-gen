import { Font } from 'react-pdf';
import RobotoLight from './Roboto-Light.ttf';
import RobotoItalicLight from './Roboto-LightItalic.ttf';
import Roboto from './Roboto-Regular.ttf';
import RobotoItalic from './Roboto-Italic.ttf';
import RobotoBold from './Roboto-Bold.ttf';
import RobotoItalicBold from './Roboto-BoldItalic.ttf';
import Merriweather from './Merriweather-Regular.ttf';
import MerriweatherLight from './Merriweather-Light.ttf';
import MerriweatherBold from './Merriweather-Bold.ttf';
import MerriweatherBoldItalic from './Merriweather-BoldItalic.ttf';
import MerriweatherItalic from './Merriweather-Italic.ttf';
import MerriweatherLightItalic from './Merriweather-LightItalic.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: Roboto },
    { src: RobotoLight },
    { src: RobotoBold, fontWeight: 700 },
  ],
});

Font.register({
  family: 'RobotoItalic',
  fonts: [
    { src: RobotoItalic },
    { src: RobotoItalicLight },
    { src: RobotoItalicBold, fontWeight: 700 },
  ],
});

Font.register({
  family: 'Merriweather',
  fonts: [
    { src: Merriweather },
    { src: MerriweatherLight },
    { src: MerriweatherBold, fontWeight: 700 },
  ],
});
Font.register({
  family: 'MerriweatherItalic',
  fonts: [
    { src: MerriweatherItalic },
    { src: MerriweatherLightItalic },
    { src: MerriweatherBoldItalic, fontWeight: 700 },
  ],
});

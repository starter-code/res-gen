import { Font } from 'react-pdf';
import RobotoLight from 'fonts/Roboto-Light.ttf';
import RobotoItalicLight from 'fonts/Roboto-LightItalic.ttf';
import Roboto from 'fonts/Roboto-Regular.ttf';
import RobotoItalic from 'fonts/Roboto-Italic.ttf';
import RobotoBold from 'fonts/Roboto-Bold.ttf';
import RobotoItalicBold from 'fonts/Roboto-BoldItalic.ttf';
import Merriweather from 'fonts/Merriweather-Regular.ttf';
import MerriweatherLight from 'fonts/Merriweather-Light.ttf';
import MerriweatherBold from 'fonts/Merriweather-Bold.ttf';
import MerriweatherBoldItalic from 'fonts/Merriweather-BoldItalic.ttf';
import MerriweatherItalic from 'fonts/Merriweather-Italic.ttf';
import MerriweatherLightItalic from 'fonts/Merriweather-LightItalic.ttf';

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

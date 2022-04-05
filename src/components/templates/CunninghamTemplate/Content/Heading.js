import React from 'react';
import { Text, View } from 'react-pdf';
import { G, Path, Svg } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

const svgStyle = {
  width: 12,
  height: 12,
  marginRight: 5,
};

const LinkedInSVG = () => {
  return (
    <Svg viewBox="0 0 34 34" style={svgStyle}>
      <G>
        <Path
          d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
          fill="#0a66c2"
        ></Path>
      </G>
    </Svg>
  );
};

const GmailSVG = () => {
  return (
    <Svg viewBox="52 42 88 66" style={svgStyle}>
      <Path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <Path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <Path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <Path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <Path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </Svg>
  );
};

const WebsiteSVG = () => {
  return (
    <Svg viewBox="0 0 64 64" style={svgStyle}>
      <G fill="#186da3">
        <Path d="m31.879 0c-17.608 0-31.879 14.273-31.879 31.881 0 17.606 14.271 31.881 31.879 31.881 17.606 0 31.879-14.274 31.879-31.881 0-17.608-14.273-31.881-31.879-31.881m0 59.53c-15.417 0-27.912-12.494-27.912-27.908 0-15.413 12.496-27.909 27.912-27.909 15.412 0 27.908 12.496 27.908 27.909 0 15.414-12.496 27.908-27.908 27.908" />
        <Path d="m32.563.018c-11.237 0-20.35 14.272-20.35 31.879 0 17.608 9.113 31.88 20.35 31.88 11.243 0 20.354-14.272 20.354-31.88 0-17.606-9.11-31.879-20.354-31.879m0 59.53c-9.841 0-17.814-12.496-17.814-27.908 0-15.414 7.973-27.908 17.814-27.908 9.842 0 17.819 12.494 17.819 27.908 0 15.412-7.977 27.908-17.819 27.908" />
        <Path d="m54.886 12.472c-.934-.713-1.689-1.729-2.145-2.825-5.118 6.113-12.746 9.99-21.265 9.99-8.08 0-15.355-3.486-20.447-9.06-.965.838-1.979 1.626-3.063 2.281 5.837 6.637 14.326 10.814 23.775 10.814 9.429 0 17.897-4.159 23.734-10.769-.197-.138-.395-.281-.589-.432" />
        <Path d="m30.04 1.868h3.667v59.75h-3.667z" />
        <Path d="m1.866 29.787h59.75v3.667h-59.75z" />
        <Path d="m11.38 53.643c5.112-5.817 12.548-9.482 20.829-9.482 8.246 0 15.657 3.638 20.767 9.417.815-.995 1.603-2.01 2.454-2.968-5.829-6.445-14.193-10.483-23.483-10.483-9.589 0-18.19 4.301-24.03 11.11.691.179 1.346.524 1.896 1.036.508.474 1.032.931 1.568 1.372" />
      </G>
    </Svg>
  );
};

const GithubSVG = () => {
  return (
    <Svg viewBox="0 0 16 16" style={svgStyle}>
      <Path
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        fill="#1B1F23"
      />
    </Svg>
  );
};

const PhoneSVG = () => {
  return (
    <Svg viewBox="0 0 512 512" style={svgStyle}>
      <Path
        d="M256,32c123.5,0,224,100.5,224,224S379.5,480,256,480S32,379.5,32,256S132.5,32,256,32 M256,0C114.625,0,0,114.625,0,256  s114.625,256,256,256s256-114.625,256-256S397.375,0,256,0L256,0z M398.719,341.594l-1.438-4.375  c-3.375-10.063-14.5-20.563-24.75-23.375L334.688,303.5c-10.25-2.781-24.875,0.969-32.406,8.5l-13.688,13.688  c-49.75-13.469-88.781-52.5-102.219-102.25l13.688-13.688c7.5-7.5,11.25-22.125,8.469-32.406L198.219,139.5  c-2.781-10.25-13.344-21.375-23.406-24.75l-4.313-1.438c-10.094-3.375-24.5,0.031-32,7.563l-20.5,20.5  c-3.656,3.625-6,14.031-6,14.063c-0.688,65.063,24.813,127.719,70.813,173.75c45.875,45.875,108.313,71.344,173.156,70.781  c0.344,0,11.063-2.281,14.719-5.938l20.5-20.5C398.688,366.063,402.063,351.656,398.719,341.594z"
        fill="#000000"
      />
    </Svg>
  );
};

export const Heading = ({ heading, details, style }) => {
  return (
    <View style={style['heading-info']}>
      <Text style={style['heading-name']}>{heading.name}</Text>
      <View style={style['contact-info']}>
        <GmailSVG />
        <Text style={style['contact-item']}>{details.email}</Text>
        <LinkedInSVG />
        <Text style={style['contact-item']}>{details.linkedin}</Text>
        <WebsiteSVG />
        <Text style={style['contact-item']}>{details.website}</Text>
        <GithubSVG />
        <Text style={style['contact-item']}>{details.github}</Text>
        <PhoneSVG />
        <Text style={style['contact-item']}>{details.phone}</Text>
      </View>
    </View>
  );
};

Heading.propTypes = {
  details: PropTypes.object,
  heading: PropTypes.object,
  style: PropTypes.object,
};
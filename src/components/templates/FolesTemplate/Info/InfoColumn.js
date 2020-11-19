import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-pdf';
import { InfoHeader } from './InfoHeader';
import { Contacts } from './InfoContactMe';
import { InfoSubSection } from './InfoSubSection';

export const InfoColumn = ({ data, style }) => {
  const {
    heading: { name, title, location },
    'contact-info': contactInfo,
    languages: languagesData,
    'libraries/frameworks': librariesData,
    'software-development': developmentData,
    interests: interestsData,
  } = data;

  return (
    <View style={style['column-info']}>
      <InfoHeader name={name} title={title} location={location} style={style} />
      <Contacts contactInfo={contactInfo} style={style} />
      <InfoSubSection data={languagesData} style={style} heading="Languages" />
      <InfoSubSection
        data={librariesData}
        style={style}
        heading="Libraries/Frameworks"
      />
      <InfoSubSection
        data={developmentData}
        style={style}
        heading="Software Development"
      />
      <InfoSubSection
        data={interestsData}
        style={style}
        heading="Personal Interests"
      />
    </View>
  );
};

InfoColumn.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};

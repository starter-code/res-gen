import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-pdf';

import { styles } from './info-styles';
import { InfoHeader } from './InfoHeader';
import { Contacts } from './InfoContactMe';
import { InfoSubSection } from './InfoSubSection';

export const InfoColumn = ({ data }) => {
  const {
    heading: { name, title, location },
    'contact-info': contactInfo,
    languages: languagesData,
    'libraries/frameworks': librariesData,
    'software-development': developmentData,
    interests: interestsData,
  } = data;

  return (
    <View style={styles['column-info']}>
      <InfoHeader name={name} title={title} location={location} />
      <Contacts contactInfo={contactInfo} />
      <InfoSubSection data={languagesData} heading="Languages" />
      <InfoSubSection data={librariesData} heading="Libraries/Frameworks" />
      <InfoSubSection data={developmentData} heading="Software Development" />
      <InfoSubSection data={interestsData} heading="Personal Interests" />
    </View>
  );
};

InfoColumn.propTypes = {
  data: PropTypes.object,
};

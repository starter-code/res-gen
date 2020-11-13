import React from 'react';
import { View } from 'react-pdf';

import PropTypes from 'prop-types';
import { styles } from './info-styles';

import { Contacts } from './infoContact';
import { Links } from './infoLinks';
import { Skills } from './infoSkills';

export const InfoColumn = ({ data }) => {
  const {
    heading: { location },
    'contact-info': contactInfo,
    skills: skillsData,
  } = data;

  const { email } = contactInfo;

  return (
    <View style={styles['column-info']}>
      <Contacts email={email} location={location} />
      <Links contactInfo={contactInfo} />
      <Skills skillsData={skillsData} data={data} />
    </View>
  );
};

InfoColumn.propTypes = {
  data: PropTypes.object,
};

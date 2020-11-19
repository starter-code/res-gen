import React from 'react';
import { View } from 'react-pdf';
import PropTypes from 'prop-types';
import { Contacts } from './infoContact';
import { Links } from './infoLinks';
import { Skills } from './infoSkills';

export const InfoColumn = ({ data, style }) => {
  const {
    heading: { location },
    'contact-info': contactInfo,
    skills: skillsData,
  } = data;

  const { email } = contactInfo;

  return (
    <View style={style['column-info']}>
      <Contacts email={email} location={location} style={style} />
      <Links contactInfo={contactInfo} style={style} />
      <Skills skillsData={skillsData} data={data} style={style} />
    </View>
  );
};

InfoColumn.propTypes = {
  data: PropTypes.object,
  style: PropTypes.object,
};

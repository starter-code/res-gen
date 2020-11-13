import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';

import { styles } from './info-styles';

export const Skills = ({ data }) => {
  return (
    <View>
      <Text style={styles['section-info-second']}>Skills</Text>
      <View style={styles['section-skills-info']}>
        {_.map(data.skills, (skill, index) => {
          return (
            <Text style={styles['skill-item']} key={index}>
              {skill}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

Skills.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

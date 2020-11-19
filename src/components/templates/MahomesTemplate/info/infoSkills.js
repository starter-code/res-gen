import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-pdf';
import _ from 'lodash';

export const Skills = ({ data, style }) => {
  return (
    <View>
      <Text style={style['info-heading']}>Skills</Text>
      <View style={style['skills-info']}>
        {_.map(data.skills, (skill, index) => {
          return (
            <Text style={style['skill-item']} key={index}>
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
  style: PropTypes.object,
};

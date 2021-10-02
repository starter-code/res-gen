import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';

export const Skills = ({ technologySkills, workflowSkills, style }) => {
  return (
    <View>
      <Text style={style['section-heading']}>Skills and Tools</Text>
      <View style={style['skills-info']}>
        <Text style={style['detail-title']}>Tech Skills: </Text>
        <Text>{technologySkills.join(', ')}</Text>
      </View>
      <View style={style['skills-info']}>
        <Text style={style['detail-title']}>Workflow: </Text>
        <Text>{workflowSkills.join(', ')}</Text>
      </View>
    </View>
  );
};

Skills.propTypes = {
  technologySkills: PropTypes.arrayOf(PropTypes.string),
  workflowSkills: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
};

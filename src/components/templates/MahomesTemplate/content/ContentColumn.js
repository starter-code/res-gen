import React from 'react';
import { Text, View } from 'react-pdf';
import PropTypes from 'prop-types';
import { styles } from './content-styles';
import { WorkExperiences } from './WorkExperience';
import { Projects } from './Projects';
import { Summary } from './Summary';

export const ContentColumn = ({ data }) => {
  return (
    <View style={styles['column--content']}>
      <Text style={styles['section-content--heading']}>
        {data.summary.heading}
      </Text>
      <Summary description={data.summary.description} />
      <Text style={styles['section-content--heading']}>
        {data.projects.heading}
      </Text>
      <Projects details={data.projects.details} />
      <Text style={styles['section-content--heading']}>
        {data['work-experience'].heading}
      </Text>
      <WorkExperiences details={data['work-experience'].details} />
    </View>
  );
};

ContentColumn.propTypes = {
  data: PropTypes.shape({
    summary: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
    projects: PropTypes.shape({
      details: PropTypes.arrayOf(PropTypes.object),
      heading: PropTypes.string,
    }),
    'work-experience': PropTypes.shape({
      details: PropTypes.arrayOf(PropTypes.object),
      heading: PropTypes.string,
    }),
  }),
};

import React from 'react';
import { View } from 'react-pdf';
import PropTypes from 'prop-types';
import { styles } from '../Styles';
import { WorkExperiences } from './WorkExperience';
import { Projects } from './Projects';
import { Summary } from './Summary';

export const ContentColumn = ({ data }) => {
  const {
    summary: { description: summaryDescription, heading: summaryHeading },
    projects: { details: projectDetails, heading: projectHeading },
    'work-experience': {
      details: workExperienceDetails,
      heading: WorkExperienceHeading,
    },
  } = data;

  return (
    <View style={styles['column-content']}>
      <Summary description={summaryDescription} heading={summaryHeading} />
      <Projects details={projectDetails} heading={projectHeading} />
      <WorkExperiences
        details={workExperienceDetails}
        heading={WorkExperienceHeading}
      />
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

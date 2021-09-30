import React from 'react';
import { View } from 'react-pdf';
import PropTypes from 'prop-types';
import { WorkExperiences } from './WorkExperience';
import { Projects } from './Projects';
import { Summary } from './Summary';

export const ContentColumn = ({ data, style }) => {
  const {
    summary: { description: summaryDescription, heading: summaryHeading },
    projects: { details: projectDetails, heading: projectHeading },
    'work-experience': { details: workExperienceDetails, heading: WorkExperienceHeading },
  } = data;

  return (
    <View style={style['column-content']}>
      <Summary description={summaryDescription} heading={summaryHeading} style={style} />
      <Projects details={projectDetails} heading={projectHeading} style={style} />
      <WorkExperiences
        details={workExperienceDetails}
        heading={WorkExperienceHeading}
        style={style}
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
  style: PropTypes.object,
};

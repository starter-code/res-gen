import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-pdf';
import { WorkExperiences } from './WorkExperiences';
import { Projects } from './Projects';
import { Educations } from './Educations';
import { OtherWorkExperiences } from './OtherWorkExperiences';

export const ContentColumn = ({ data, style }) => {
  const {
    projects: { details: projectDetails, heading: projectsHeading },
    education: { details: educationDetails, heading: educationHeading },
    'work-experience': {
      details: workExperienceDetails,
      heading: workExperienceHeading,
    },
    'other-work-experience': {
      details: OtherWorkExperienceDetails,
      heading: OtherWorkExperienceHeading,
    },
  } = data;
  return (
    <View style={style['column-content']}>
      <WorkExperiences
        details={workExperienceDetails}
        heading={workExperienceHeading}
        style={style}
      />
      <Projects
        details={projectDetails}
        heading={projectsHeading}
        style={style}
      />
      <Educations
        details={educationDetails}
        heading={educationHeading}
        style={style}
      />
      <OtherWorkExperiences
        details={OtherWorkExperienceDetails}
        heading={OtherWorkExperienceHeading}
        style={style}
      />
    </View>
  );
};

ContentColumn.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.object,
    education: PropTypes.object,
    'work-experience': PropTypes.object,
    'other-work-experience': PropTypes.object,
  }),
  style: PropTypes.object,
};

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-pdf';

import { styles } from './content-styles';
import { WorkExperiences } from './WorkExperiences';
import { Projects } from './Projects';
import { Educations } from './Educations';
import { OtherWorkExperiences } from './OtherWorkExperiences';

export const ContentColumn = ({ data }) => {
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
    <View style={styles['column--content']}>
      <WorkExperiences
        details={workExperienceDetails}
        heading={workExperienceHeading}
      />
      <Projects details={projectDetails} heading={projectsHeading} />
      <Educations details={educationDetails} heading={educationHeading} />
      <OtherWorkExperiences
        details={OtherWorkExperienceDetails}
        heading={OtherWorkExperienceHeading}
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
};

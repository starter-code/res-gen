import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-pdf';

import { Educations } from './Educations';
import { Heading } from './Heading';
import { Interests } from './Interests';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Summary } from './Summary';
import { WorkExperiences } from './WorkExperiences';

export const ContentColumn = ({ data, style }) => {
  const {
    'contact-info': contactInfo,
    interests,
    education,
    heading,
    'libraries/frameworks': technologySkills,
    projects,
    'software-development': workflowSkills,
    summary,
    'work-experience': workExperience,
  } = data;

  return (
    <View style={style['column-content']}>
      <Heading details={contactInfo} heading={heading} style={style} />
      <Summary description={summary.description} heading={summary.heading} style={style} />
      <WorkExperiences
        details={workExperience.details}
        heading={workExperience.heading}
        style={style}
      />
      <Projects details={projects.details} heading={projects.heading} style={style} />
      <Skills technologySkills={technologySkills} workflowSkills={workflowSkills} style={style} />
      <Educations details={education.details} heading={education.heading} style={style} />
      <Interests interests={interests} style={style} />
    </View>
  );
};

ContentColumn.propTypes = {
  data: PropTypes.object, // TODO shape
  style: PropTypes.object,
};

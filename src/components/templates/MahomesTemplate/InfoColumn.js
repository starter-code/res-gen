import React from 'react';
import { Text, View, StyleSheet } from 'react-pdf';
import _ from 'lodash';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  'contact-info--contact-item': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 5px',
  },
  'column--info': {
    backgroundColor: '#EEE',
    color: 'black',
    padding: '24px 0 0 12px',
    width: '35%',
  },
  'heading-info--name': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  'section-info--heading': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    padding: '0 0 0 0px',
  },
  'section-info--heading-second': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    padding: '15px 0 0 0px',
  },
  'section--contact-info': {
    padding: '0 0 0 0px',
  },
  'section--heading-info': {
    padding: '0 0 0 0px',
  },
  'section--skills-info': {
    padding: '0 0 0 0px',
  },
  'section--skills-info--text': {
    marginBottom: '10px',
    marginLeft: '10px',
  },
  'heading--location-item': {
    padding: '0 0 20px 5px',
  },
});

export const InfoColumn = ({ data }) => {
  return (
    <View style={styles['column--info']}>
      <Text style={styles['section-info--heading']}>Contact</Text>
      <View style={styles['heading--location-item']}>
        <Text>{data['contact-info'].email}</Text>
      </View>
      <Text style={styles['section-info--heading']}>Links</Text>
      <View style={styles['section--contact-info']}>
        <View style={styles['contact-info--contact-item']}>
          <Text>Github: </Text>
          <Text>{data['contact-info'].github}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>LinkedIn: </Text>
          <Text>{data['contact-info'].linkedin}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>Website: </Text>
          <Text>{data['contact-info'].website}</Text>
        </View>
      </View>
      <Text style={styles['section-info--heading-second']}>Skills</Text>
      <View style={styles['section--skills-info']}>
        {_.map(data.skills, (skill, index) => {
          return (
            <Text style={styles['section--skills-info--text']} key={index}>
              {skill}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

InfoColumn.propTypes = {
  data: PropTypes.shape({
    'contact-info': PropTypes.shape({
      email: PropTypes.string,
      github: PropTypes.string,
      linkedin: PropTypes.string,
      website: PropTypes.string,
    }),
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
};

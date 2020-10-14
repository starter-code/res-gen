import React from 'react';
import { Text, View, StyleSheet } from 'react-pdf';
import data from '../../../example-json/john_smith.json';
import _ from 'lodash';

const styles = StyleSheet.create({
  'contact-info--contact-item': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 5px',
  },
  'column--info': {
    backgroundColor: 'lightgrey',
    color: 'black',
    padding: '24px 0 0 0',
    width: '35%',
    height: '100%',
  },
  'heading-info--name': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  'section-info--heading': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    padding: '0 0 0 5px',
  },
  'section-info--heading-second': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    padding: '15px 0 0 5px',
  },
  'section--contact-info': {
    padding: '0 0 0 5px',
  },
  'section--heading-info': {
    padding: '0 0 0 24px',
  },
  'section--skills-info': {
    padding: '0 0 0 10px',
  },
  'section--skills-info--text': {
    marginBottom: '10px',
  },
  'heading--location-item': {
    top: '-15',
    padding: '0 0 0 5px',
  },
});

export const InfoColumn = () => {
  return (
    <View style={styles['column--info']}>
      <View style={styles['heading--location-item']}>
        <Text>{data['heading'].location}</Text>
        <Text>Zip code</Text>
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
              - {skill}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

import React from 'react';
import { Text, View, StyleSheet } from 'react-pdf';
import data from '../../../example-json/john_smith.json';
import _ from 'lodash';

const styles = StyleSheet.create({
  'contact-info--contact-item': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 12px 0 0',
  },
  'column--info': {
    backgroundColor: 'darkslategrey',
    color: 'white',
    padding: '24px 0 0 0',
    width: '35%',
  },
  'heading-info--name': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  'heading-info--title': {
    fontSize: 14,
  },
  'heading-info--location': {
    fontSize: 14,
  },
  'section-info--heading': {
    backgroundColor: '#446F6F',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '16px 0 8px 0',
    padding: '0 0 0 24px',
  },
  'section--contact-info': {
    padding: '0 0 0 24px',
  },
  'section--heading-info': {
    padding: '0 0 0 24px',
  },
  'section--skills-info': {
    padding: '0 0 0 24px',
  },
});

export const InfoColumn = () => {
  return (
    <View style={styles['column--info']}>
      <View style={styles['section--heading-info']}>
        <Text style={styles['heading-info--name']}>{data.heading.name}</Text>
        <Text style={styles['heading-info--title']}>{data.heading.title}</Text>
        <Text style={styles['heading-info--location']}>
          {data.heading.location}
        </Text>
      </View>
      <Text style={styles['section-info--heading']}>Contact</Text>
      <View style={styles['section--contact-info']}>
        <View style={styles['contact-info--contact-item']}>
          <Text>Gmail:</Text>
          <Text>{data['contact-info'].email}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>Github:</Text>
          <Text>{data['contact-info'].github}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>LinkedIn:</Text>
          <Text>{data['contact-info'].linkedin}</Text>
        </View>
        <View style={styles['contact-info--contact-item']}>
          <Text>Website:</Text>
          <Text>{data['contact-info'].website}</Text>
        </View>
      </View>
      <Text style={styles['section-info--heading']}>Skills</Text>
      <View style={styles['section--skills-info']}>
        {_.map(data.skills, (skill, index) => {
          return <Text key={index}>{skill}</Text>;
        })}
      </View>
    </View>
  );
};

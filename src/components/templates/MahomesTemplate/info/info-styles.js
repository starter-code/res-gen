import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'list-item': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 5px',
  },
  'column-info': {
    backgroundColor: '#EEE',
    color: 'black',
    padding: '0 0 0 12px',
    width: '35%',
  },
  'heading-info--name': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  'info-heading': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '8px 0 8px 0',
    padding: '0 0 0 0px',
  },
  'section-info-second': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    padding: '15px 0 0 0px',
  },
  'section-heading-info': {
    padding: '0 0 0 0px',
  },
  'section-skills-info': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    margin: '3px 0 8px 0',
  },
  'skill-item': {
    backgroundColor: '#276a97',
    display: 'inline',
    borderRadius: 8,
    color: 'white',
    margin: '0 100px 5px 0',
    padding: '0 6px',
  },
});

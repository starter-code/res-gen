import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'column--content': {
    backgroundColor: 'white',
    padding: '0 12px 0 12px',
    width: '65%',
  },
  'section-content--heading': {
    fontSize: 16,
    margin: '8px 0 0 0',
    padding: '0 0 8px 0',
    fontWeight: 'bold',
  },
  'work-experience-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'work-experience-content--title': {
    fontWeight: 'bold',
  },
  'work-experience-content--tags': {
    display: 'flex',
    flexDirection: 'row',
    margin: '3px 0 8px 0',
  },
  'work-experience-content--tags-item': {
    backgroundColor: '#276a97',
    borderRadius: 8,
    color: 'white',
    fontSize: 8,
    margin: '0 4px 0 0',
    padding: '0 6px',
  },
  'work-experience-content--descriptions-item': {
    margin: '0 0 4px 15px',
    fontSize: 10,
  },
  'project-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 0',
  },
  'project-content--subheading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'project-content--project': {
    fontWeight: 'bold',
  },
  'project-content--descriptor': {
    fontSize: '8',
    fontFamily: 'MerriweatherItalic',
    padding: '2px 0 0 0',
  },
  'summary--heading': {
    display: 'flex',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'summary--description': {
    display: 'flex',
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'column-content': {
    backgroundColor: 'white',
    padding: '0 12px 0 12px',
    width: '65%',
  },
  'section-heading': {
    fontSize: 16,
    margin: '8px 0 0 0',
    padding: '0 0 8px 0',
    fontWeight: 'bold',
  },
  'work-experience-heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'work-experience-title': {
    fontWeight: 'bold',
  },
  'work-experience-tags': {
    display: 'flex',
    flexDirection: 'row',
    margin: '3px 0 8px 0',
  },
  'tag-item': {
    backgroundColor: '#276a97',
    borderRadius: 8,
    color: 'white',
    fontSize: 8,
    margin: '0 4px 0 0',
    padding: '0 6px',
  },
  'work-experience-description': {
    margin: '0 0 4px 15px',
    fontSize: 10,
  },
  'project-heading': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 0',
  },
  'project-subheading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'project-project': {
    fontWeight: 'bold',
  },
  'project-descriptor': {
    fontSize: '8',
    fontFamily: 'MerriweatherItalic',
    padding: '2px 0 0 0',
  },
  'summary-heading': {
    display: 'flex',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'summary-description': {
    display: 'flex',
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

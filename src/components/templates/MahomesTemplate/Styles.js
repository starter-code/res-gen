import { StyleSheet } from 'react-pdf';

export const style = StyleSheet.create({
  page: {
    display: 'flex',
    fontFamily: 'Merriweather',
    fontSize: 12,
  },
  columns: {
    flexDirection: 'row',
    height: '100%',
  },
  'heading-info': {
    backgroundColor: '#276a97',
    color: 'white',
    padding: '24px 0 24px 24px',
    width: '100%',
  },
  'heading-name': {
    fontSize: 30,
    fontWeight: 'bold',
    padding: '0 0 10px 0',
  },
  'heading-title': {
    fontSize: 15,
  },
  'column-content': {
    backgroundColor: 'white',
    padding: '0 12px 0 12px',
    width: '65%',
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
    flexShrink: 1,
  },
  'project-title': {
    fontWeight: 'bold',
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
  'project-descriptor': {
    fontSize: '10',
    fontFamily: 'MerriweatherItalic',
    padding: '2px 0 0 0',
  },
  'section-heading': {
    fontSize: 16,
    margin: '8px 0 0 0',
    padding: '0 0 8px 0',
    fontWeight: 'bold',
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
  'column-info': {
    backgroundColor: '#EEE',
    color: 'black',
    padding: '0 0 0 12px',
    width: '35%',
  },
  'info-heading': {
    fontSize: 16,
    fontWeight: 'bold',
    margin: '8px 0 8px 0',
    padding: '0 0 0 0px',
  },
  'info-list-item': {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 0 5px 5px',
  },
  'skills-info': {
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

import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'contact-info--contact-item': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 12px 0 0',
  },
  'column-info': {
    backgroundColor: '#276a97',
    color: 'white',
    padding: '24px 0 24px 0',
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
  'section-info--heading': {
    backgroundColor: '#446F6F',
    fontSize: 22,
    fontWeight: 'bold',
    margin: '16px 0 8px 0',
    padding: '0 0 0 24px',
  },
  'section--contact-info': {
    padding: '0 0 0 24px',
  },
  'section--heading-info': {
    padding: '0 0 0 12px',
  },
  'section--skills-info': {
    padding: '0 0 0 24px',
  },
});

import { StyleSheet } from 'react-pdf';

export const style = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 10,
    padding: '24px',
  },
  'column-content': {
    backgroundColor: 'white',
    width: '100%',
  },
  'contact-info': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  'contact-item': {
    margin: '0 12px 4px 0',
  },
  'description-item': {
    padding: '0 0 0 0',
    margin: '0 0 2px 8px',
  },
  'detail-heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'detail-title': {
    fontWeight: 'bold',
  },
  'heading-info': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  'heading-name': {
    fontSize: 32,
    textAlign: 'center',
  },
  interests: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  'tags-list': {
    display: 'flex',
    flexDirection: 'row',
    margin: '4px 0',
  },
  'tag-item': {
    backgroundColor: '#333',
    borderRadius: 2,
    color: 'white',
    fontSize: 6,
    margin: '0 4px 0 0',
    padding: '0 4px',
  },
  'section-heading': {
    fontSize: 14,
    margin: '8px 0',
    textAlign: 'center',
    borderBottom: 1,
  },
  'skills-info': {
    display: 'flex',
    flexDirection: 'row',
  },
});

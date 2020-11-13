import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'column-content': {
    backgroundColor: 'white',
    padding: '24px 24px 0 24px',
    width: '65%',
  },
  'section-heading': {
    fontSize: 14,
    margin: '8px 0',
    textAlign: 'center',
    borderBottom: 1,
  },
  'detail-heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'detail-title': {
    fontWeight: 'bold',
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
  'description-item': {
    padding: '0 0 0 0',
    margin: '0 0 2px 8px',
  },
  'project-content--heading': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

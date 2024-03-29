import { StyleSheet } from 'react-pdf';

export const style = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontSize: 8,
  },
  'column-content': {
    backgroundColor: 'white',
    padding: '24px 24px 0 24px',
    width: '65%',
    height: '100%',
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
  'column-info': {
    backgroundColor: 'darkslategrey',
    color: 'white',
    padding: '24px 0 0 0',
    width: '35%',
  },
  'contact-item': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 12px 4px 0',
  },
  'info-header': {
    padding: '0 0 0 24px',
  },
  'info-header-name': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  'info-header-title': {
    fontSize: 14,
  },
  'info-header-location': {
    fontSize: 14,
  },
  'info-header-content': {
    backgroundColor: '#446F6F',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '16px 0 8px 0',
    padding: '0 0 0 24px',
  },
  'info-section': {
    padding: '0 0 0 24px',
  },
  'info-item': {
    margin: '0 0 4px 0',
  },
});

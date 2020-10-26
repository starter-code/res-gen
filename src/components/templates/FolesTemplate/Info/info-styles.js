import { StyleSheet } from 'react-pdf';

export const styles = StyleSheet.create({
  'column--info': {
    backgroundColor: 'darkslategrey',
    color: 'white',
    padding: '24px 0 0 0',
    width: '35%',
  },
  'contact-info-item': {
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
  'info-sub-section': {
    padding: '0 0 0 24px',
  },
  'info-sub-section-header': {
    backgroundColor: '#446F6F',
    fontSize: 16,
    fontWeight: 'bold',
    margin: '16px 0 8px 0',
    padding: '0 0 0 24px',
  },
  'info-sub-section-item': {
    margin: '0 0 4px 0',
  },
});

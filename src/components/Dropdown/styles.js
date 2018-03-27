import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    width: '86%',
    marginLeft: '3%',
    marginRight: '3%',
    fontSize: 18,
    textAlignVertical: 'center',
  },
  buttonIcon: {
    width: '5%',
    alignSelf: 'center',
    marginRight: '3%',
  },
  modal: {
    flexGrow: 1,
    width: '100%',
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    height: '100%',
  },
  row: {
    width: '100%',
  },
  rowText: {
    width: '94%',
    height: '100%',
    marginLeft: '3%',
    marginRight: '3%',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  highlightedRowText: {
    backgroundColor: '#ddd',
  },
  normalRowText: {
    backgroundColor: '#fff',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ddd',
  },
});

export default styles;

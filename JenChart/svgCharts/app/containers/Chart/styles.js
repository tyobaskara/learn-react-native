import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    color: '#333333',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10
  },
  section: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
    marginBottom: 10,
    paddingVertical: 20,
  },
  sectionScroll: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
    marginBottom: 10,
    paddingVertical: 20,
  }
});

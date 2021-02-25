import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  home_text: {
    marginVertical: 5, 
    color: '#696969', 
    fontSize: 19,
  },
  home_search: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 25,
  },
  home_input: {
    height: 40,
    width: 200, 
    borderColor: '#1e90ff', 
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 10,
  },
});
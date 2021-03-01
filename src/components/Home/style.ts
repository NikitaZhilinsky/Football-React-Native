import { StyleSheet, ViewStyle, TextStyle, TextInputProps, ImageStyle } from 'react-native';

type Styles = {
  home_container: ViewStyle;
  home_search: TextStyle;
  home_input: TextInputProps;
}

export const styles = StyleSheet.create<Styles>({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
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
    color: '#1e90ff',
  }
});
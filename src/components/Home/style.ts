import { StyleSheet, ViewStyle, TextStyle, TextInputProps, ImageStyle } from 'react-native';

type Styles = {
  home_container: ViewStyle;
  home_text: TextStyle;
  home_search: TextStyle;
  home_input: TextInputProps;
  home_image: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
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
  home_image: { 
    width: 300, 
    height: 250 
  }
});
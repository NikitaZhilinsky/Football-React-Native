import { StyleSheet, ViewStyle, TextStyle, ImageStyle, ButtonProps } from 'react-native';

type Styles = {
  home_container: ViewStyle,
  modal: ViewStyle,
  logo: ImageStyle,
  button: ButtonProps | ViewStyle,
}

export const styles = StyleSheet.create<Styles>({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  modal: {
    backgroundColor: 'white', 
    padding: 20
  },
  logo: {
    width: 15,
    height: 15,
  },
  button: {
    marginTop: 30,
  }
});
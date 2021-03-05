import { transform } from '@babel/core';
import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  ImageStyle, 
  ButtonProps, 
} from 'react-native';

type Styles = {
  home_container: ViewStyle,
  home_modal: ViewStyle,
  load_indicator: ViewStyle,
  league_cell: ViewStyle,
  league_name: TextStyle,
  league_area: TextStyle,
  // logo: ImageStyle,
  home_button: ViewStyle,
  button_title: TextStyle,
}

export const styles = StyleSheet.create<Styles>({
  home_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
  home_modal: {
    backgroundColor: 'white',
    height: 630,
  },
  load_indicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
  league_cell: {
    padding: 15,
    borderBottomWidth: 2,
  },
  league_name: {
    fontSize: 21
  },
  league_area: {

  },
  // logo: {
  //   width: 15,
  //   height: 15,
  // },
  home_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_title: {
    fontSize: 22,
  },
});
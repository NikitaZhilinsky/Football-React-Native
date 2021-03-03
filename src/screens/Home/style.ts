import { transform } from '@babel/core';
import { StyleSheet, ViewStyle, TextStyle, ImageStyle, ButtonProps, View } from 'react-native';

type Styles = {
  home_container: ViewStyle,
  home_modal: ViewStyle,
  load_indicator: ViewStyle,
  league_cell: ViewStyle,
  league_name: TextStyle,
  league_area: TextStyle,
  // logo: ImageStyle,
  home_button: ButtonProps | ViewStyle,
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
    margin: 10
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
    marginTop: 30,
  }
});
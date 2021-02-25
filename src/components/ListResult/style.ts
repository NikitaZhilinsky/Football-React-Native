import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  results_container: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  results_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
}); 

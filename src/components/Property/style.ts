import { StyleSheet, ViewStyle } from 'react-native';

type Styles = {
  property_container: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  property_container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#eae9ef',
  },
}); 
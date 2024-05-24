import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  background: '#000000',
  textPrimary: 'white',
  textSecondary: '#666666',
};

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    fontWeight: '300',
    marginBottom: 10,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
  },
});

import {Text, Pressable} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  blackText?: boolean;
  color?: string;
  doubleSize?: boolean;
  label: string;
  onPress: () => void;
}

export const CalculatorButton = ({
  blackText = false,
  color = colors.darkGray,
  doubleSize = false,
  label,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 70,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

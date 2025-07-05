import { View, Pressable, TextInput, Keyboard } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/ui/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';

interface PhoneInputProps {
  value: String;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const { styles } = useStyles(phoneStyles);

  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText variant="h2">🇮🇳</CustomText>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold"> +91 </CustomText>
        <TextInput
          placeholder="Enter your phone number"
          KeyboardType="phone-pad"
          value={value}
          maxLength={10}
          placeholderTextColor={Colors.lightText}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

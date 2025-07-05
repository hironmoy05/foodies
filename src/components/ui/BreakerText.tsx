import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';

const BreakerText: FC<{ text: string }> = ({ text }) => {
  const { styles } = useStyles(loginStyles);

  return (
    <View style={styles.breakerContainer}>
      <CustomText fontFamily="Okra-Medium" fontSize={12} style={styles.title}>
        {text}
      </CustomText>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default BreakerText;

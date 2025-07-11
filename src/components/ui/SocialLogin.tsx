import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from './Icon';
import { RFValue } from 'react-native-responsive-fontsize';

const SocialLogin: FC = () => {
  const { styles } = useStyles(phoneStyles);
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('@assets/icons/google.png')}
          style={styles.gimg}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="logo-apple"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="ellipses-horizontal-sharp"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

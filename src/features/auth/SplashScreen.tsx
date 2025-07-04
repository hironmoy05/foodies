import { View, StatusBar, Platform, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useStyles } from 'react-native-unistyles';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { splashStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import { resetAndNavigate } from '@utils/NavigationUtils';

const SplashScreen: FC = () => {
  const { styles } = useStyles(splashStyles);

  useEffect(() => {
    const timer = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View
        entering={FadeInDown.delay(400).duration(800)}
        style={styles.animatedContainer}
      >
        <Image
          source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />
      </Animated.View>
      <CustomText
        variant="h5"
        fontFamily="Okra-Medium"
        color="#fff"
        style={styles.msgText}
      >
        From kitchen to doorstep, your cravings, delivered!
      </CustomText>
    </View>
  );
};

export default SplashScreen;

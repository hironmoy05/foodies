import {
  View,
  StatusBar,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import SocialLogin from '@components/ui/SocialLogin';
import { resetAndNavigate } from '@utils/NavigationUtils';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';

const LoginScreen: FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const { styles } = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTab');
    }, 2000);
  };

  useEffect(() => {
    if (keyboardOffsetHeight === 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffsetHeight, animatedValue]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={'on-drag'}
        style={{ transform: [{ translateY: animatedValue }] }}
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          India's #1st Food Delivery and Dinning App
        </CustomText>

        <BreakerText text="Login with or Sign up" />

        <PhoneInput
          onFocus={() => {}}
          onBlur={() => {}}
          value={phone}
          onChangeText={(text: string) => setPhone(text)}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          activeOpacity={0.8}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText fontFamily="Okra-Medium" color="#fff" variant="h5">
              continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="or" />
        <SocialLogin />
      </Animated.ScrollView>

      <View style={styles.footer}>
        <CustomText>By continuing, you agree to our </CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms or Service</CustomText>
          <CustomText style={styles.footerText}> Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

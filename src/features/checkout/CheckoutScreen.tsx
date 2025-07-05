import { View, Text, Image } from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { emptyStyles } from '@unistyles/emptyStyles';

const CheckoutScreen = () => {
  const { styles } = useStyles(emptyStyles);
  return (
    <View style={styles.container(false)}>
      <Image
        source={require('@assets/images/coming-soon3.png')}
        style={styles.emptyImage}
      />
    </View>
  );
};

export default CheckoutScreen;

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/1.png')}
        style={styles.image}
        resizeMode="cover" // Görüntünün tüm genişliği ve yüksekliği kapsamasını sağlar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%', // Ekran genişliğini kapsayacak
    height: '100%', // Ekran yüksekliğini kapsayacak
  },
});

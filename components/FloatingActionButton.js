import React, {useState, useEffect} from 'react';
import {Colors} from '../styles';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from 'react-native';

const buttonSize = 80;
const actions = [
  {
    title: 'Edit',
    onPress: '',
  },
  {
    title: 'View',
    onPress: '',
  },
];

const FloatingActionButton = () => {
  const [active, setActive] = useState(false);
  const [animation] = useState(new Animated.Value(1));
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
    TouchableOpacity,
  );

  useEffect(() => {
    active ? animateTiming(0) : animateTiming(1);
  });

  const animateTiming = toValue => {
    Animated.timing(animation, {
      toValue: toValue,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const opacityAnimation = () => {
    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
  };

  const actionTranslateY = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {actions.map((action, index) => {
        return (
          <AnimatedTouchableOpacity
            key={index}
            style={[
              styles.action,
              {opacity: opacityAnimation()},
              actionTranslateY,
            ]}>
            <Text style={styles.text}>{action.title}</Text>
          </AnimatedTouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.main}
        onPress={() => {
          setActive(!active);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: '#FF982BFF',
  },
  action: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default FloatingActionButton;

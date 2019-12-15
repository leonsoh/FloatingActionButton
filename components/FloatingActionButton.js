import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

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

  useEffect(() => {
    active ? animateTiming(0) : animateTiming(1);
  });

  const animateTiming = toValue => {
    Animated.spring(animation, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: true,
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
          inputRange: [1, 2],
          outputRange: [0, 100],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {actions.map((action, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.actionContainer,
              {opacity: opacityAnimation()},
              actionTranslateY,
            ]}>
            <TouchableOpacity style={styles.action}>
              <Text style={styles.text}>{action.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}

      <TouchableOpacity
        style={styles.main}
        onPress={() => {
          setActive(!active);
        }}>
        <Icon color={'black'} name="menuunfold" size={25} />
      </TouchableOpacity>
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
  actionContainer: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    marginBottom: 10,
    bottom: 40,
  },
  main: {
    position: 'absolute',
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF982BFF',
    shadowOpacity: 0.25,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 5,
  },
  action: {
    position: 'absolute',
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowOffset: {height: 0.5, width: 0.5},
  },
  text: {
    textAlign: 'center',
  },
});

export default FloatingActionButton;

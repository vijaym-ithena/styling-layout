import React from 'react';
import {useCallback, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import companyLogo from '../assets/images/ithena-logo.png';

export default function LoginScreen({navigation}) {
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={{textAlign: 'center'}}>
        <Image
          source={companyLogo}
          alt="ITHENA"
          resizeMode="cover"
          style={{height: 71, width: 200}}
        />
      </View>
      <Text style={styles.heading}>Login / Sign up</Text>
      <TextInput
        label={'Email Address'}
        value={text}
        textColor="#0076ba" // #4488c3 - original color
        activeOutlineColor="#0076ba"
        activeUnderlineColor="#0076ba"
        cursorColor="#0076ba"
        style={styles.input}
        contentStyle={{paddingLeft: 0}}
        onChangeText={newText => setText(newText)}
      />
      <TouchableRipple
        rippleColor={'#FFEAE0'}
        style={{
          marginVertical: 25,
          padding: 5,
          display: 'flex',
          alignSelf: 'flex-end',
        }}
        onPress={() => navigation.navigate('phonelogin')}>
        <Text style={{color: '#ff6a28', fontWeight: '600', fontSize: 12}}>
          Quick Try with Phone Number
        </Text>
      </TouchableRipple>
      <Button
        mode="contained"
        buttonColor="#0076ba" // #4488c3 - original color
        textColor="white"
        rippleColor="#D0EEFF" // #d9e7f3 - original ripple color
        style={styles.button}
        onPress={() => console.log('Continue pressed!')}>
        Continue
      </Button>
      <BottomSheet
        snapPoints={['20%']}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.bottomSheet}>
          <Text>Content</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    marginVertical: 25,
    fontSize: 18,
    color: '#808080',
    width: '100%',
    textAlign: 'left',
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 10,
    width: 'auto',
  },
  input: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'transparent',
    fontSize: 14,
  },
  bottomSheet: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

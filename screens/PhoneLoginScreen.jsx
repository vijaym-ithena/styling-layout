import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';

export default function PhoneLoginScreen({navigation}) {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Button
          icon={'close'}
          contentStyle={{flexDirection: 'row-reverse'}}
          style={{alignSelf: 'flex-end', padding: 0}}
          onPress={() => console.log('PhoneLoginScreen closed!')}
        />
        <Text style={styles.heading}>
          Quick Sign-up / Sign-in with your phone
        </Text>
        <View style={styles.numberContainer}>
          <TextInput
            label={'Country Code'}
            textColor="#0076ba"
            activeOutlineColor="#0076ba"
            activeUnderlineColor="#0076ba"
            cursorColor="#0076ba"
            value={countryCode}
            style={[styles.input, {width: '20%'}]}
            contentStyle={{paddingLeft: 0}}
            onChangeText={newCode => setCountryCode(newCode)}
          />
          <TextInput
            label={'Phone Number'}
            textColor="#0076ba"
            activeOutlineColor="#0076ba"
            activeUnderlineColor="#0076ba"
            cursorColor="#0076ba"
            value={phoneNumber}
            style={[styles.input, {width: '80%'}]}
            contentStyle={{paddingLeft: 0}}
            onChangeText={newNumber => setPhoneNumber(newNumber)}
          />
        </View>
      </View>
      <View>
        <TouchableRipple
          rippleColor={'#FFEAE0'}
          style={{
            marginVertical: 20,
            padding: 5,
            display: 'flex',
            alignSelf: 'flex-end',
          }}
          onPress={() => navigation.navigate('login')}>
          <Text style={{color: '#ff6a28', fontWeight: '600', fontSize: 12}}>
            Try with Email address
          </Text>
        </TouchableRipple>
        <Button
          mode="contained"
          // #4488c3 - original color
          buttonColor="#0076ba"
          textColor="white"
          // #d9e7f3 - original ripple color
          rippleColor="#D0EEFF"
          style={styles.button}
          onPress={() => navigation.navigate('otp')}>
          Send OTP
        </Button>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <Text style={{fontSize: 10}}>
            By continuing, you agree to ITHENA's{' '}
          </Text>
          <TouchableRipple
            rippleColor={'#FFEAE0'}
            style={{display: 'flex', alignSelf: 'flex-start'}}
            onPress={() => console.log('TnC pressed!')}>
            <Text style={{color: '#ff6a28', fontWeight: '600', fontSize: 10}}>
              Terms & Conditions
            </Text>
          </TouchableRipple>
          <Text style={{fontSize: 10}}> and </Text>
          <TouchableRipple
            rippleColor={'#FFEAE0'}
            style={{display: 'flex', alignSelf: 'flex-start'}}
            onPress={() => console.log('Privacy policy pressed!')}>
            <Text style={{color: '#ff6a28', fontWeight: '600', fontSize: 10}}>
              Privacy Policy
            </Text>
          </TouchableRipple>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    marginVertical: 25,
    fontSize: 18,
    color: '#808080',
    width: 'auto',
    textAlign: 'left',
  },
  button: {
    borderRadius: 10,
    width: 'auto',
    marginBottom: 10,
  },
  input: {
    textAlign: 'left',
    backgroundColor: 'transparent',
    fontSize: 14,
  },
  numberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
    width: '100%',
  },
});

import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput, TouchableRipple} from 'react-native-paper';
import companyLogo from '../assets/images/ithena-logo.png';

export default function OtpScreen({navigation}) {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Button
            icon={'arrow-left'}
            onPress={() => navigation.goBack()}
            mode="text"
            style={{width: 'auto'}}
          />
          <Image
            source={companyLogo}
            alt="ITHENA"
            resizeMode="cover"
            style={{height: 71, width: 200}}
          />
          <Image />
        </View>
        <View>
          <Text style={styles.heading}>Authentication via OTP</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <Text
              style={{
                marginVertical: 25,
                fontSize: 14,
                color: '#808080',
                width: 'auto',
                textAlign: 'left',
              }}>
              Enter OTP received on ** number **
            </Text>
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
                Change phone
              </Text>
            </TouchableRipple>
          </View>
        </View>
        <TextInput
          label={''}
          value={otp}
          style={styles.input}
          contentStyle={{textAlign: 'center'}}
          onChangeText={newOtp => setOtp(newOtp)}
        />
        <Text>00:30</Text>
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
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    fontSize: 14,
  },
});

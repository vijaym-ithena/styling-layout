import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, TextInput, TouchableRipple } from "react-native-paper";
import companyLogo from '../assets/images/ithena-logo.png';

export default function SignupScreen({ navigation }){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // CODE FOR APP BAR
  // --------------------
  // <Appbar.Header>
  //   <Appbar.BackAction />
  //   <Appbar.Action icon={companyLogo} color="blue" size={125} />
  // </Appbar.Header>
  
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Button
            icon={'arrow-left'}
            onPress={() => navigation.goBack()}
            mode="text"
            style={{ width: 'auto' }}
          />
          <Image
            source={companyLogo}
            alt="ITHENA"
            resizeMode="cover"
            style={{ height: 71, width: 200 }}
          />
          <Image />
        </View>
        <Text style={styles.heading}>Hello! Sign up to explore</Text>
        <TextInput
          label={'Email Address'}
          value={email}
          // #4488c3 - original color
          textColor="#0076ba"
          activeOutlineColor="#0076ba"
          activeUnderlineColor="#0076ba"
          cursorColor="#0076ba"
          style={styles.input}
          contentStyle={{ paddingLeft: 0 }}
          onChangeText={newEmail => setEmail(newEmail)}
        />
        <TextInput
          label={'Full Name'}
          value={name}
          // #4488c3 - original color
          textColor="#0076ba"
          activeOutlineColor="#0076ba"
          activeUnderlineColor="#0076ba"
          cursorColor="#0076ba"
          style={styles.input}
          contentStyle={{ paddingLeft: 0 }}
          onChangeText={newName => setName(newName)}
        />
        <TextInput
          label={'Phone (Optional)'}
          value={phone}
          // #4488c3 - original color
          textColor="#0076ba"
          activeOutlineColor="#0076ba"
          activeUnderlineColor="#0076ba"
          cursorColor="#0076ba"
          style={styles.input}
          contentStyle={{ paddingLeft: 0 }}
          onChangeText={newPhone => setPhone(newPhone)}
        />
      </View>
      <View>
        <Button
          mode="contained"
          // #4488c3 - original color
          buttonColor="#0076ba"
          textColor="white"
          // #d9e7f3 - original ripple color
          rippleColor="#D0EEFF"
          style={styles.button}
          onPress={() => console.log('Continue pressed!')}
        >Continue</Button>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 12 }}>Already have an account?</Text>
          <TouchableRipple
            rippleColor={'#FFEAE0'}
            style={{ marginVertical: 20, paddingVertical: 5, paddingHorizontal: 10, display: 'flex', alignSelf: 'flex-start' }}
            onPress={() => console.log('Sign in pressed!')}
          >
            <Text style={{ color: '#ff6a28', fontWeight: '600', fontSize: 12 }}>Sign in</Text>
          </TouchableRipple>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 10 }}>By signing up, you agree to the </Text>
          <TouchableRipple
            rippleColor={'#D0EEFF'}
            style={{ display: 'flex', alignSelf: 'flex-start' }}
            onPress={() => console.log('TnC pressed!')}
          >
            <Text style={{ color: '#0076ba', fontWeight: '600', fontSize: 10 }}>terms and conditions</Text>
          </TouchableRipple>
          <Text style={{ fontSize: 10 }}> and </Text>
          <TouchableRipple
            rippleColor={'#D0EEFF'}
            style={{ display: 'flex', alignSelf: 'flex-start' }}
            onPress={() => console.log('Privacy policy pressed!')}
          >
            <Text style={{ color: '#0076ba', fontWeight: '600', fontSize: 10 }}>privacy policy</Text>
          </TouchableRipple>
          <Text style={{ fontSize: 10 }}> of ITHENA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  heading: {
    marginVertical: 25,
    fontSize: 18,
    color: '#808080',
    width: 'auto',
    textAlign: 'left'
  },
  button: {
    borderRadius: 10,
    width: 'auto'
  },
  input: {
    textAlign: 'left',
    width: 'auto',
    backgroundColor: 'transparent',
    fontSize: 14
  }
});
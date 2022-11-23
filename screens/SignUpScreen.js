import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';

export default function SignUpcreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const twoButtonAlert = (alertTitle, alertMsg, option1, option2, nav0, nav1) =>
    Alert.alert(
      alertTitle,
      alertMsg,
      [
        {
          text: option1,
          onPress: () => navigation.navigate(nav0),
          style: "cancel"
        },
        { text: option2, onPress: () => navigation.navigate(nav1) }
      ]
    );
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeaderText}>Sign up</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(name) => setName(name)}
        value={name}
        placeholder='Username'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder='Email'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={password => setPassword(password)}
        value={password}
        placeholder='Password'
        placeholderTextColor={'#ffff'}
        editable
        color='#fff'
        secureTextEntry={true}
      />
      <TouchableOpacity
          style = {styles.signupBtn}
          onPress={() => Alert.alert('Sign up button pressed')}>
          <Text 
            style={styles.signupText}>Sign up
          </Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity
          style = {styles.signupGoogle}
          onPress={() => Alert.alert('Sign up with Google')}>
          <Text 
            style={styles.signupGoogleText}>Sign up with Google
          </Text>
        </TouchableOpacity>
        <Text style={styles.haveAccText}>Already have an account?</Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text 
            style={styles.newAccText} 
            onPress={() => twoButtonAlert("Sign in", "Are you sure you want to sign in?","No", "Yes", "Sign_Up", "Sign_In")}>
            Sign in
          </Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginHeaderText: {
    color: "#fff",
    fontSize: '30dp',
    fontWeight: 'bold',
    marginBottom:50
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#621190",
  },
  signupText: {
    color:'#fff'
  },
  orText:{
    color:"#fff",
    marginTop: 10,
  },
  signupGoogle: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "rgba(1,2,4, 0.7)",
  },
  signupGoogleText: {
    color: '#fff',
  },
  haveAccText: {
    color: "#fff",
    paddingTop: 50,
  },
  newAccText: {
    color: "#fff",
    textDecorationLine: 'underline'
  }
});
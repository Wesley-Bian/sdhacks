import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

/**
 * This is the screen redirected by the home screen.
 * Here, customers can add their name, phone number, and party size
 * The ADD button will store data into the database, refresh the
 * table in the home screen, and then redirect customers back to 
 * the home screen where everything is updated
 * 
 * @param navigation
 */
function CustomerAdd({ navigation }) {
    // name_input for name, phone_input for phone, party_input for party size
    const [name_input, onChangeName] = useState('');
    const [phone_input, onChangePhone] = useState('');
    const [party_input, onChangeParty] = useState('');
    
    return (
      /**
       * KeyboardAvoidingView to solve the keyboard pushing layout out of order problem
       */
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={true}>

          {/**
           * Container for the whole screen. This container is wrapped within
           * KeyBoardAvoidingView so that mobile phone's keyboard can't interupt
           * the screen's layout too much
           */}
          <SafeAreaView style={styles.waitlist_container}>

              {/**
               * Container for the input boxes
               */}
              <View style={styles.info_container}>

                {/**
                 * This TextInput keeps track of customer's name
                */}
                <TextInput
                  style={styles.input}
                  clearTextOnFocus={true}
                  textContentType={'name'}
                  placeholder={'Enter name here'}
                  onChangeText={text => onChangeName(text)}
                  value={name_input}
                />
  
                {/**
                 * This TextInput keeps track of customer's phone number
                 */}
                <TextInput
                  style={styles.input}
                  clearTextOnFocus={true}
                  textContentType={'telephoneNumber'}
                  keyboardType={'number-pad'}
                  placeholder={'Enter phone number here'}
                  onChangeText={text => onChangePhone(text)}
                  value={phone_input}
                />
  
                {/**
                * This TextInput keeps track of customer's party size
                */}
                <TextInput
                  style={styles.input}
                  clearTextOnFocus={true}
                  textContentType={'postalCode'}
                  keyboardType={'number-pad'}
                  placeholder={'Enter party size here'}
                  onChangeText={text => onChangeParty(text)}
                  value={party_input}
                />
  
              </View>
  
              {/**
               * This is the ADD button
               * Upon clicking, it will check whether the fields are empty
               * If empty, display a warning. If not empty then store the data
               * and go back to Customer Home screen
               */}
              <TouchableOpacity
                  style={styles.add_btn}
                  onPress={() =>  {
  
                    if (name_input == "" || phone_input == "" || party_input == "") {
                        console.log("None of the fields can be empty!")
                    } else {
                        console.log("Name: " + name_input);
                        console.log("Phone: " + phone_input);
                        console.log("Party size: " + party_input);
                        navigation.navigate('HOME');
                    }
                    
                  }}
              >
                  <Text>ADD</Text>
              </TouchableOpacity>

          </SafeAreaView>
        </KeyboardAvoidingView>
    );
  }

/**
 * Style for components used
 */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-end'
    },

    waitlist_container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    info_container: {
        position: 'absolute',
        width: '80%',
        height: '50%',
        bottom: '30%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    add_btn: {
        width: '80%',
        height: 60,
        bottom: 20,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    input: {
        paddingLeft: 10,
        height: 50,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CustomerAdd;
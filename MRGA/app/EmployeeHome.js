import 'react-native-gesture-handler';
import React from 'react';
import EmployeeWaitlist from './EmployeeWaitlist';
import {
  BrowserRouter as Router,
  Switch, Route,
  Link,
  useParams,
  useRouteMatch
}
from 'react-router-dom';

import {
    StyleSheet,
    SafeAreaView,
    View,
    Button,
    Alert,
    Text,
    TouchableOpacity
} from 'react-native';


/**
 * This is the home screen that customers will see
 * It renders the waitlist table and the JOIN button
 * Upon clicking the JOIN button, customer will be
 * redirected to the ADD page where they can input
 * their name, phone number, and party size
 *
 * @param navigation
 */
class EmployeeHome extends React.Component {
    render() {
    return (
        <SafeAreaView style={styles.container}>
          <EmployeeWaitlist />



          <Link to={'waitlist/add'}>
            <TouchableOpacity
              style={{
                height: '50px',
                top: 100,
                width: '360px',
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}> ADD </Text>
              </TouchableOpacity>
          </Link>

          <Link to={'waitlist/add'}>
          <TouchableOpacity
            style={{
              height: '50px',
              width: '360px',
              top: 110,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}> Insert </Text>
            </TouchableOpacity>
          </Link>

          <Link to={'waitlist/add'}>
          <TouchableOpacity
            style={{
              height: '50px',
              width: '360px',
              top: 120,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}> Remove </Text>
            </TouchableOpacity>
          </Link>

              <TouchableOpacity
                  style={{
                      height: '50px',
                      width: '360px',
                      top: 130,
                      backgroundColor: 'black',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}
                  onPress={() =>{
                    /*
                    * Call to backend
                    */
                  }}
              >
                  <Text style={{ color: '#fff' }}>POP</Text>
              </TouchableOpacity>

        </SafeAreaView>
    )};
  }

  export default EmployeeHome;


/**
 * Style for components used
 */
const styles = StyleSheet.create({
    container: {
      top:20,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    add: {
      backgroundColor: 'black',
      border: 'none',
      color: 'white',
      textAlign: 'center',
      fontSize: '16px'
    },

    btn: {
        width: '80%',
        height: 60,
        bottom: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },


    tble: {
        top: 20,
        alignSelf: 'center',
        width: '80%',
        height: '50%',
        backgroundColor: '#fff'
    },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',


    padding: '20px',
    textAlign: 'center',

    textDecoration: 'none',
   display: 'inline-block',
   fontSize: '16px',

    margin: '4px 2px',
   borderRadius: '12px'
}

});

import 'react-native-gesture-handler';
import React from 'react';
import EmployeeWaitlist from './employeeWaitlist';
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
function Employee() {
  const {url, path} = useRouteMatch();

    return (
        <SafeAreaView style={styles.container}>
          <EmployeeWaitlist />



          <Link to={'${url}/CustomerAdd'}>
            <View style={styles.btn}>
              <button type='button' style={styles.add}>
                Add
              </button>
            </View>
          </Link>

          <Link to={'${url}/CustomerAdd'}>
            <View style={styles.btn}>
              <button type='button'>
                Seat
              </button>
            </View>
          </Link>

          <Link to={'${url}/CustomerAdd'}>
            <View style={styles.btn}>
              <button type='button'>
                Remove
              </button>
            </View>
          </Link>

        </SafeAreaView>
    );
  }

  export default Employee;


/**
 * Style for components used
 */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
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
    }

});

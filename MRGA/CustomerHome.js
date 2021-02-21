import 'react-native-gesture-handler';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { 
    StyleSheet, 
    SafeAreaView, 
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import CustomerWaitlist from './WailistTable';

/**
 * This is the home screen that customers will see
 * It renders the waitlist table and the JOIN button
 * Upon clicking the JOIN button, customer will be
 * redirected to the ADD page where they can input
 * their name, phone number, and party size
 * 
 */
function CustomerHome(/*{ navigation }*/) {

    /**
     * Upon clicking the JOIN button, the app will navigate to the 
     * ADD screen
     */
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.tble}>
                {/**
                 * Waitlist table here
                 */}
                <CustomerWaitlist />

            </View>

                {/**
                 * This is the JOIN button. The redirect link is wrapped within
                 * a TouchableOpacity component
                 */}
                <TouchableOpacity
                    style={styles.join_btn}
                >
                    <Link to={'/CustomerAdd'} style={{ height: '100%', width: '100%', textDecoration: 'none' }}>
                        <TouchableOpacity 
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                backgroundColor: 'black', 
                                justifyContent: 'center', 
                                alignItems: 'center' 
                            }}
                        >
                            <Text style={{ color: '#fff' }}>JOIN</Text>
                        </TouchableOpacity>
                    </Link>

                </TouchableOpacity>
        </SafeAreaView>  
    );
  }


/**
 * Style for components used
 */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
    },

    join_btn: {
        width: '80%',
        height: 60,
        bottom: '10%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    tble: {
        bottom: '15%',
        alignSelf: 'center',
        width: '80%',
        height: '70%',
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center'
    }

});

export default CustomerHome;
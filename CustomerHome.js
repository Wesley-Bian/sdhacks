import 'react-native-gesture-handler';
import React from 'react';

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
function CustomerHome({ navigation }) {

    /**
     * Upon clicking the JOIN button, the app will navigate to the 
     * ADD screen
     */
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.tble}>
                {/**
                 * TODO: Implement waitlist table here
                 */}
            </View>
            
            <TouchableOpacity
                style={styles.join_btn}
                onPress={() =>  navigation.navigate('ADD TO WAITLIST')}
            >
                <Text>JOIN</Text>
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
        bottom: 20,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    tble: {
        bottom: '15%',
        alignSelf: 'center',
        width: '80%',
        height: '70%',
        backgroundColor: '#fff'
    }

});

export default CustomerHome;
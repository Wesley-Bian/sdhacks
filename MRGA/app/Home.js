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
    Button,
    Alert,
    Text,
    TouchableOpacity
} from 'react-native';

class Home extends React.Component{
    render(){
      return(
        <View style={{backgroundColor: '#27DFb0', flex: 1, alignItems: 'center'}}>
        <h1 style={{
          textAlign: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'monospace'
        }}> Welcome to the CheckIn Prototype! </h1>

        <Link to={'/waitlist'}>
        <TouchableOpacity
          style={{
            height: '50px',
            width: '360px',
            top: 300,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: '20px', fontFamily: 'monospace'}}> CheckIt Out </Text>
          </TouchableOpacity>
        </Link>

        <Link to={'/employee'}>
        <TouchableOpacity
          style={{
            height: '50px',
            width: '360px',
            top: 305,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: '20px', fontFamily: 'monospace'}}> Employee Page </Text>
          </TouchableOpacity>
        </Link>

        </View>

    )};
}
export default Home

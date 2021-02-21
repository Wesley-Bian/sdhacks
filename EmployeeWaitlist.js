import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import ReactNative, { StyleSheet, Text, View } from 'react-native';


/* Provides the basic front-end operations of a dynamic waitlist.
 * Uses an array of entries for now, we'll obtain data to fill
 * from the db.
 *
 */
class EmployeeWaitlist extends Component {
  constructor(props){
    super(props)
    //creates a state called parties from input
    try{
      let res = fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/mrgafunctions', {
        method: 'POST',

        headers: {
          Accept: 'application/json',
          Origin: 'http://localhost:19006/',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "action": "getwaitlist",
          "rid": "1"
        })
      });
      console.log(res);
    }
    catch(exception){
      console.log(exception);
    }
    this.state = {
      parties: [
        {id: 1, name: 'Logan', phone: '888-888-8888', partysize: 5, waittime: 5},
        {id: 2, name: 'Tai', phone: '888-888-8888', partysize: 6, waittime: 10},
        {id: 3, name: 'Muntaser', phone: '888-888-8888', partysize: 4, waittime: 15},
        {id: 4, name: 'Wess', phone: '888-888-8888', partysize: 4, waittime: 20},
        {id: 5, name: 'Calvin', phone: '888-888-8888', partysize: 12, waittime: 25},
        {id: 6, name: 'Sid Nag', phone: '888-888-8888', partysize: 8, waittime: 30},
        {id: 7, name: 'Johnny', phone: '888-888-8888', partysize: 2, waittime: 35},
      ]
  }
}

  render(){
    return(
      <div>
          <h1 style={{textAlign:'center', fontSize: 30, fontFamily: 'monospace'}}> Current Waitlist </h1>
          <table style={{
            top: 1,
            width: '100%',
            height: '70%',
            textAlign: 'center',
            fontFamily: 'monospace',

          }}>
            <tbody>
              {this.renderHeaders()}
              {this.renderData()}
            </tbody>
          </table>
      </div>
    );
  }

  //helper method for creating headers
  renderHeaders(){
    return(
      <tr>
        <th>Spot</th>
        <th>Name</th>
        <th>Phone</th>
        <th>PartySize</th>
        <th>Wait</th>
      </tr>

    );
  }


  //helper method that dynamically creates rows from array
  renderData() {
    return this.state.parties.map((party, index) => {
      const { id, name, phone, partysize, waittime} = party //destructing
      return(
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{partysize}</td>
          <td>{waittime}</td>
        </tr>
      );
    })
  }
}

export default EmployeeWaitlist


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

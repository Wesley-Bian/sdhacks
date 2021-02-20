import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Provides the basic front-end operations of a dynamic waitlist.
 *
 *
 *
 */
class waitlist extends Component {
    constructor(props){
      super(props)
      this.state = {
        parties: [
          {idx: 1, name: 'Logan', phone: '888-888-8888', partySize: 5, wait: 5},
          {idx: 2, name: 'Tai', phone: '888-888-8888', partySize: 6, wait: 10},
          {idx: 3, name: 'Muntaser', phone: '888-888-8888', partySize: 4, wait: 15}
        ]
      }
    }
  
    render(){
      return(
        <div>
            <h1> Current Waitlist </h1>
            <table>
              <tbody>
                {this.renderHeaders()}
                {this.renderData()}
              </tbody>
            </table>
        </div>
      );
    }
  
    renderHeaders(){
      let header = Object.keys(this.state.parties[0])
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
  
 
    renderData() {
      return this.state.parties.map((party, index) => {
        const { idx, name, phone, partySize, wait} = party //destructing
        return(
          <tr key={idx}>
            <td>{idx}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{partySize}</td>
            <td>{wait}</td>
          </tr>
        );
      })
    }
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default waitlist;
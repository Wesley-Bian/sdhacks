import React, {Component} from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, async } from 'react-native';





// const fetchData =  async () => {
  
//   try {
//     let res = await fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/mrgafunctions', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         Origin: 'http://localhost:19006/',
//         'Content-Type': 'application/json'
//       },

//       body: JSON.stringify ({
//         "action" : "getwaitlist",
//         "rid" : "1"
//       })
//     });
//     const returnedJSON =  await res.json();
//     return returnedJSON.parties;

//   } catch (exception) {
//     console.log(exception);
//   }
  
// }


var arr = [];

/* Provides the basic front-end operations of a dynamic waitlist.
 *
 *
 *
 */
class CustomerWaitlist extends Component {
    constructor(props){
      super(props)
      

      this.state = {
        parties: [
          {id: 1, name: 'Joe', phone: 123123123, partysize: 2, waittime: 5}
        ]
      }
    }

    /**
     * Need fixing.Basically setState to include everything before plus the new 
     * object
     * @param {*} name 
     * @param {*} phone 
     * @param {*} partysize 
     */
    addPart(name, phone, partysize) {
      this.setState({
        id: this.state.parties.length, 
        name: name,
        phone: phone,
        partysize: partysize,
        waittime: this.state.parties.length * 5
      });
      
    }

    render(){
      return(
        
        <div style={{ 
          height: '100%', 
          width: '100%',
          backgroundColor: '#fff', 
          textAlign: 'center'
        }}>
            <h1 style={{ fontSize: 30, fontFamily:'monospace' }}> Current Waitlist </h1>
            <table style={{ flex:1, width: '100%', textAlign: 'center', fontFamily: 'monospace' }}>
              <tbody>
                {this.renderHeaders()}
                {this.renderData()}
              </tbody>
            </table>
        </div>
      );
    }
  
    renderHeaders(){
      //let header = Object.keys(this.state.parties[0])
      return(
        <tr>
          <th>Spot</th>
          <th>Name</th>
          <th>PartySize</th>
          <th>Wait</th>
        </tr>
  
      );
    }
  
 
    renderData() {
      return  this.state.parties.map((party, index) => {
        const { id, name, phone, partysize, waittime} = party //destructing
        return(
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{partysize}</td>
            <td>{waittime}</td>
          </tr>
        );
      })
    }

  
}
  


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });

export default CustomerWaitlist;
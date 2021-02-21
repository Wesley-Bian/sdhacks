import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



const fetchData = () => {
  // try {
  //   let res = await fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/mrgafunctions', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: {
  //       Accept: 'application/json',
  //       Origin: 'http://localhost:19006/',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },

  //     body: JSON.stringify ({
  //       "action" : "getwaitlist",
  //       "rid" : "1"
  //     })
  //   });
  //   let returnedJSON = await res.json();
  //   return returnedJSON;

  // } catch (exception) {
  //   console.log(exception)
  // }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "__Host-GAPS=1:EJxWgnc2tTbK5JGpZx91Nj68GxroKA:yBAIT_X_6RCkvHvt");
  myHeaders.append("Origin", "http://localhost:19006/");

  var raw = JSON.stringify({"action":"getwaitlist","rid":"1"});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/mrgafunctions", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
}


/* Provides the basic front-end operations of a dynamic waitlist.
 *
 *
 *
 */
class CustomerWaitlist extends Component {
    
    constructor(props){
      super(props)
      let data = fetchData();

      console.log(data);


      // try {
      //   let res = fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/mrgafunctions', {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       Origin: 'http://localhost:19006/',
      //       'Content-Type': 'application/json'
      //     },
    
      //     body: JSON.stringify ({
      //       "action" : "getwaitlist",
      //       "rid" : "1"
      //     })
      //   });

      //   this.state.parties = res;
    
      // } catch (exception) {
      //   console.log(exception)
      // }

      this.state = {
        parties: [
          // {idx: 1, name: 'Logan', partySize: 5, wait: 5},
          // {idx: 2, name: 'Tai', partySize: 6, wait: 10},
          // {idx: 3, name: 'Muntaser', partySize: 4, wait: 15}
        ]
      }
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
      return this.state.parties.map((party, index) => {
        const { idx, name, phone, partySize, wait} = party //destructing
        return(
          <tr key={idx}>
            <td>{idx}</td>
            <td>{name}</td>
            <td>{partySize}</td>
            <td>{wait}</td>
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
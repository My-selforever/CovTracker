import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
import SLists from '../Components/Slist'
import {Header} from 'react-native-elements'
import { FlatList } from 'react-native';
export default class India extends React.Component{
constructor(){
    super();
    this.state={
        states:'',
    }
}

    componentDidMount = async () => {
        var link =
          "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
        return fetch(link)
          .then((response) => {
           return response.json();
          })
          .then((captureResponse) => {
            this.setState({ states: captureResponse.regionData });
          });
      };
    
      render() {
         
        return (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fafafa",
                
              }}
            >
                    <FlatList
          data={this.state.states}
          renderItem={({ item }) => {
          return <SLists state = {item.region}></SLists>
          }}
        />
            </View>
        );
      }
    }

const style = StyleSheet.create({
    title: {
        fontSize: 23,
        alignSelf: "center",
        color: "#ffffff",
        fontFamily:'monospace',
        fontWeight:'bold',
        padding:10
      },
    
})
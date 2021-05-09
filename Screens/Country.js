import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Lists from "../Components/Clist";
import {Header} from 'react-native-elements'
export default class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      alldata: "",
    };
  }

  componentDidMount = async () => {
    var link = "https://api.covid19api.com/summary";
    return fetch(link)
      .then((response) => response.json())
      .then((CaptureResponse) => {
        this.setState({ alldata: CaptureResponse.Countries });
      });
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          backgroundColor: "#B8FFE9",
        }}
      >

        <Header centerComponent={{text:'Country Data',style:style.title}}/>


        <FlatList
          data={this.state.alldata}
          renderItem={({ item }) => {
            var link =
              "https://www.countryflags.io/" +
              item.CountryCode +
              "/flat/64.png";
            return <Lists Img={link} country={item.Country} itm={item}></Lists>;
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

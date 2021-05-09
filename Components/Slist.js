import React from "react";
import { TouchableOpacity } from "react-native";
import { Modal, Dimensions } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { PieChart } from "react-native-chart-kit";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PieData: [
        {
          name: "Active Cases",
          cases: this.props.state.activeCases,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Deceased",
          cases: this.props.state.deceased,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
        {
          name: "Recovered",
          cases: this.props.state.recovered,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        },
      ],
      modal: false,
    };
  }

  showModal = () => {
    return (
      <Modal visible={this.state.modal} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#9cc2ff",
          }}
        >
          <PieChart
            data={this.state.PieData}
            width={220}
            height={220}
            chartConfig={{
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="cases"
            backgroundColor="transparent"
            paddingLeft="15"
          ></PieChart>
          <TouchableOpacity style ={style.button} onPress={()=>{this.setState({modal:false})}}>
           <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#fafafa",
          marginTop: 10,
          height: 100,
          width: 400,
          borderRadius: 5,
          borderWidth: 2,
          borderStyle: "dashed",
          justifyContent: "space-evenly",
        }}
      >
        {this.showModal()}
        <Text
          style={{
            fontSize: 17,
            fontFamily: "monospace",
            fontWeight: "bold",
            padding: 15,
          }}
        >
          {this.props.state}
        </Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            this.setState({
              modal: true,
            });
          }}
        >
          <Text>View</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    backgroundColor: "#4285F4",
    height: 30,
    width: 75,
    alignItems: "center",
    marginTop: 15,
  },
});

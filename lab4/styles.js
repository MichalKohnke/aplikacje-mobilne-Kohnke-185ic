import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "burlywood",
    padding: 10,
    paddingTop: 20
  },

  textInputContainer: {
    alignSelf: "stretch"
  },

  textInputLabel: {
    marginBottom: 4
  },

  textInput: {
    backgroundColor: "cornsilk",
    height: 20,
    fontSize: 11
  },
  
  container2: {
flex: 1,
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-around",
alignItems: "center",
backgroundColor: "olive"
},
pickerHeight: {
height: 300
},
pickerContainer: {
flex: 1,
flexDirection: "column",
alignItems: "center",
marginTop: 40,
backgroundColor: "white",
padding: 6,
height: 240
},
pickerLabel: {
fontSize: 14,
fontWeight: "bold"
},
picker: {
width: 100,
backgroundColor: "white"
},
selection: {
width: 200,
marginTop: 230,
textAlign: "center"
},

container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "khaki"
  },

  customSwitch: {
    alignItems: "center",
    margin: 10
  },
  
  container4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ivory"
  },

  notificationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  notificationInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 2,
    alignItems: "center"
  },
  
  container5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ivory"
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
});
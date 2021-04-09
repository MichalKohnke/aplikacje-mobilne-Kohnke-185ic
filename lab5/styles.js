import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "powderblue"
  },
  
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "wheat"
  },
  
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "olivedrab"
  },
  
  container4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lavender"
  },

  text: {
	marginTop: 20,
    fontSize: 20
  },

	text2: {
	marginTop: 20,
    fontSize: 20,
    textAlign: "center"
  },
  
  scroll: {
    height: 1,
    alignSelf: "stretch"
  },

  scrollItem: {
    alignSelf: "center"
  },
  
  button: {
	padding: 10,
	margin: 5,
	backgroundColor: "tomato",
	borderWidth: 1,
	borderRadius: 4,
	borderColor: "black"
	},

	buttonText: {
		color: "black"
	},
	
	swipeContainer: {
		flex: 1,
		flexDirection: "row",
		width: 200,
		height: 30,
		marginTop: 50
	},
	swipeItem: {
		width: 200,
		height: 30,
		backgroundColor: "azure",
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 4,
		borderColor: "darkkhaki"
	},
	swipeItemText: {
		textAlign: "center",
		color: "darkkhaki"
	},
	swipeBlank: {
		width: 200,
		height: 30
	}
	});
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dogContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  dogImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  dogName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailedViewContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  detailedImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButton: {
    color: "blue",
    marginTop: 10,
  },
});

export default styles;

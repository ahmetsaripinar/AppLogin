import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { forwardRef } from "react";

const CustomButton = forwardRef(({ type, title, onPress, size = 'md', textColor }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      style={[
        styles.button,
        styles[`button_${type}`],
        styles[`button_${size}`]
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        styles[`text_${type}`],
        styles[`text_${size}`],
        textColor && { color: textColor }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    width: 150,
  },
  button_primary: {
    backgroundColor: "#007AFF",
  },
  button_secondary: {
    backgroundColor: "#dee2e6",
  },
  button_success: {
    backgroundColor: "#28A745",
  },
  button_danger: {
    backgroundColor: "#DC3545",
  },
  button_warning: {
    backgroundColor: "#FFC107",
  },
  button_info: {
    backgroundColor: "#17A2B8",
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
  },
  text_primary: {
    color: "white",
  },
  text_secondary: {
    color: "white",
  },
  text_success: {
    color: "white",
  },
  text_danger: {
    color: "white",
  },
  text_warning: {
    color: "black", // Warning arka planı açık renk olduğu için metin siyah
  },
  text_info: {
    color: "white",
  },
  button_xs: {
    padding: 8,
    width: 100,
  },
  button_sm: {
    padding: 10,
    width: 120,
  },
  button_md: {
    padding: 15,
    width: 150,
  },
  button_lg: {
    padding: 20,
    width: 180,
  },
  button_xl: {
    padding: 20,
    width: 270,
    borderRadius: 10,
  },
  text_xs: {
    fontSize: 12,
  },
  text_sm: {
    fontSize: 14,
  },
  text_md: {
    fontSize: 16,
  },
  text_lg: {
    fontSize: 18,
  },
  text_xl: {
    fontSize: 20,
  },
});
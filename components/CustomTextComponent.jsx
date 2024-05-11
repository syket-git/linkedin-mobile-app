import React, { useState } from "react";
import { Text } from "react-native";

const CustomTextComponent = ({ text, textStyle }) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const handleTextLayout = (event) => {
    const { lines } = event.nativeEvent;
    // Check if there are more lines than the numberOfLines prop
    if (lines.length > 1) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  };

  return (
    <Text
      numberOfLines={1}
      onTextLayout={handleTextLayout}
      className={`${textStyle} text-gray-100`}
    >
      {text}
      {isTruncated && "..."}
    </Text>
  );
};

export default CustomTextComponent;

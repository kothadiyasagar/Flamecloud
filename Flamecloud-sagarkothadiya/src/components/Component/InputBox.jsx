import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

export function InputBox() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box border="1px solid #CBD5E1" borderRadius={"4px"} padding="8px 16px" margin={"20px 0"}>
      <Text >NAME {value}</Text>
      <Input
        value={value}
        border="none"
        onChange={handleChange}
        fontSize="15px"
        pl={0}
        lineHeight={"130%"}
        fontWeight={400}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </Box>
  );
}

import { Select, Box, Center } from "native-base";
import React from "react";

const NativeBaseHackSelect = ({ selectedValue, listItems, onValueChange }) => {
  return (
    <Center>
      <Box>
        <Select
          selectedValue={selectedValue}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          onValueChange={(itemValue) => onValueChange(itemValue)}
        >
          {listItems.map((d, i) => (
            <Select.Item key={i} label={d.label} value={d.value} />
          ))}
        </Select>
      </Box>
    </Center>
  );
};

export default NativeBaseHackSelect;

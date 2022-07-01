import { Button, Box } from "native-base";

const NativeBaseHackButton = ({
  onPress,
  label,
  size,
  colorScheme,
  isDisabled = false,
  isLoading = false,
  isLoadingText = "Submitting...",
  leftIcon,
  variant = "solid",
  width,
}) => {
  return (
    <Box alignItems="center">
      <Button
        isLoading={isLoading}
        isLoadingText={isLoadingText}
        onPress={onPress}
        isDisabled={isDisabled}
        colorScheme={colorScheme}
        variant={variant}
        size={size}
        leftIcon={leftIcon}
        m={1}
        width={width}
      >
        {label}
      </Button>
    </Box>
  );
};

const NativeBaseHackButtonGroup = ({ label }) => {
  return (
    <Button.Group
      m={1}
      isAttached
      mx={{
        base: "auto",
        md: 0,
      }}
      size="sm"
    >
      <Button variant={"outline"}>{label[0]}</Button>
      <Button variant={false ? "outline" : "solid"}>{label[1]}</Button>
      <Button variant={"outline"}>{label[1]}</Button>
    </Button.Group>
  );
};

export { NativeBaseHackButton, NativeBaseHackButtonGroup };

import { Button } from "@chakra-ui/react";
export const Button2 = () => {
  return (
    <Button
      fontWeight="bold"
      borderRadius="30px" // <-- border radius is same for all variants and sizes
      width="120px"
      w={{ base: "130px", md: "180px" }}
      fontSize={{ base: "m", md: "sm" }}
      bg={{ base: "gyay.600", md: "pink.800" }}
      color="white"
    />
  );
};

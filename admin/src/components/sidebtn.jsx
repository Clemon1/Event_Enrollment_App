import { Button, Flex } from "@chakra-ui/react";

const SideBTN = ({ handleSideClick }) => {
  return (
    <Flex display={["flex", "flex", "flex", "flex", "none"]} width={"100%"}>
      <Button onClick={handleSideClick}>=</Button>
    </Flex>
  );
};

export default SideBTN;

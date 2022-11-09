import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'
import { InputBox } from "./Component/InputBox";

export const PointerName = () => {
  const OverlayOne = () => (

    
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button>
      {/* modal */}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Pointer Name</ModalHeader>

          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ullam
              odit voluptatibus?
            </Text>
            <InputBox></InputBox>
          </ModalBody>
          <ModalFooter gap={"10px"}>
            <Button onClick={onClose} variant="outline" colorScheme={`red`}>
              Cancel
            </Button>
            <Button colorScheme={"blue"}>Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

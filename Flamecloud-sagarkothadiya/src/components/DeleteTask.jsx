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

export const DeleteTask = () => {
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

      <Modal isCentered isOpen={isOpen} onClose={onClose} >
        {overlay}
        <ModalContent w="480px" h="277px" >
          <ModalHeader fontWeight={700}>Delete Category or/ Sub Category</ModalHeader>
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet aliquam est.</Text>
          </ModalBody>
          <ModalFooter gap={"10px"}>
            <Button onClick={onClose} variant='outline' colorScheme={`red`}>Close</Button>
            <Button colorScheme={"blue"} variant='outline'>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

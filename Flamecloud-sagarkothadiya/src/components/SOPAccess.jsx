import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { users } from "../data/userArr";

import { AcessCart } from "./Component/AcessCart";
import { MdOutlineGroup } from "react-icons/md";


export const SOPAccess = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  let [sale, setsale] = useState(false);
  const [salesMember, setSalesMember] = useState([]);

  let [marketing, setmarketing] = useState(false);
  const [marketingMember, setMarketingMember] = useState([]);

  let [designState, setDesignState] = useState(false);
  const [design, setdesign] = useState([]);
  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        leftIcon={<MdOutlineGroup></MdOutlineGroup>}
        color="#2563EB"
        variant={"outline"}
      >
        Manage Access
      </Button>


      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>

          <ModalHeader color={"#0F172A"}>SOP Access</ModalHeader>

          <ModalBody>
            <Box>
              <AcessCart
                heading={"Sales"}
                member={salesMember}
                setMember={setSalesMember}
                state={sale}
                setState={setsale}
                users={users}
              ></AcessCart>
            </Box>

            <Box>
              <AcessCart
                heading={"Marketing"}
                member={marketingMember}
                setMember={setMarketingMember}
                state={marketing}
                setState={setmarketing}
                users={users}
              ></AcessCart>
            </Box>

            <Box>
              <AcessCart
                heading={"Design"}
                member={design}
                setMember={setdesign}
                state={designState}
                setState={setDesignState}
                users={users}
              ></AcessCart>
            </Box>
          </ModalBody>

          <ModalFooter gap={"10px"}>
            <Button onClick={onClose} variant="outline" colorScheme={`red`}>
              Cancel
            </Button>
            <Button colorScheme={"blue"}>Update</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
};

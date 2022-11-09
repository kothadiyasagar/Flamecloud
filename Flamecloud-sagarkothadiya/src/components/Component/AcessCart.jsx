import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import "./AcessCart.css"

export const AcessCart = ({
  heading,
  member,
  state,
  setState,
  users,
  setMember,
}) => {
  return (
    <Box>
      <Heading as={"h4"} size="m" color={"#2563EB"}>
        {heading}
      </Heading>
      <Flex
        justifyContent={"space-between"}
        border={"2px solid #CBD5E1"}
        borderRadius={"4px"}
        padding={"8px 16px"}
        alignItems={"center"}
      >
        <Box>
          <Text>TEAMMATES</Text>
          <Flex flexWrap={"wrap"} gap={"10px"}>
            {member.length === 0
              ? "Select Member "
              : member.map((e) => (
                  <Tag size="lg" colorScheme="red" borderRadius="full">
                    <Avatar
                      src={e.dp}
                      size="xs"
                      name="Segun Adebayo"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>{e.name}</TagLabel>
                    <TagCloseButton />
                  </Tag>
                ))}
          </Flex>
        </Box>

        {/* Add member */}
        <Box _hover={{ cursor: "pointer" }} onClick={() => setState(!state)}>
          {state ? (
            <AiFillMinusSquare color="gray"></AiFillMinusSquare>
          ) : (
            <BsFillPlusSquareFill color="gray"></BsFillPlusSquareFill>
          )}
        </Box>
      </Flex>
      {
        state &&<Flex className="dropdownuser" h={"148px"}  direction={"column"} gap={"5px"} padding={"10px 0"} border={"2px solid #CBD5E1"} mt={"10px"} borderRadius={"4px"}>
          {
            users.map((e) => {
              return (
                <Flex
                  gap={"20px"}
                  _hover={{ cursor: "pointer", background: "#F0F9FF" }}
                  padding={"2px 16px"} 
                  onClick={() => {
                    member.includes(e)
                      ? setMember(member)
                      : setMember([...member, e]);
                  }}
                >
                  <Image src={e.dp} w="25px" borderRadius={"50%"}></Image>
                  <Text>{e.name}</Text>
                </Flex>
              );
            })}
        </Flex>
      }
    </Box>
  );
};

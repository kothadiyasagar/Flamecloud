import { Box, Typography } from "@mui/material";
import { Icon } from "../styled";
import DragIcon from "../assets/drag.svg";
import OptionIcon from "../assets/option.svg";
import DownIcon from "../assets/down.svg";
import PlusIcon from "../assets/plus.svg";
import DelIcon from "../assets/del.svg";
import { useState } from "react";

export default function DragList({ data, index, type }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Box
        sx={{
          p: 2,
          mb: "6px",
          borderRadius: "8px",
          backgroundColor:
            type === 1 ? "#F1F5F9;" : type === 3 ? "#F8FAFC" : "",
          py: "4px",
          px: "20px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          width: type === 3 ? "91%" : "auto",
          marginLeft: type === 3 ? "3%" : 0,
          border: type === 1 ? "none" : "1px solid #CBD5E1"
        }}
        onClick={() => setOpened(!opened)}
        style={{ cursor: "pointer" }}
      >
        {type === 2 && (
          <Box
            sx={{
              width: "20px",
              height: "20px",
              position: "absolute",
              border: "1px solid #CBD5E1",
              background: "#F0F9FF",
              borderRadius: "3px",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {opened ? (
              <Icon src={DelIcon} alt="icon" />
            ) : (
              <Icon src={PlusIcon} alt="icon" />
            )}
          </Box>
        )}
        <Box sx={{ display: "flex" }}>
          <Icon draggable="false" width="8" src={DragIcon} alt="drag-icon" />

          <Typography
            fontSize={16}
            fontWeight={700}
            lineHeight="44px"
            textAlign="left"
            sx={{ ml: "12px" }}
          >
            {data.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Icon draggable="false" width="24" src={OptionIcon} alt="drag-icon" />
          {type === 1 && (
            <Box sx={{ display: "flex", ml: "12px" }}>
              <Icon
                draggable="false"
                width="12"
                src={DownIcon}
                alt="drag-icon"
                rotate={opened ? "0" : "-90"}
              />
            </Box>
          )}
        </Box>
      </Box>
      {data?.subComp?.map((d) => {
        return (
          <Box
            sx={{
              height: opened ? "auto" : "0px",
              overflowY: "hidden"
            }}
          >
            <DragList data={d} key={d.name} type={2} />
          </Box>
        );
      })}
      {data?.pointers?.map((d) => {
        return (
          <Box
            sx={{
              height: opened ? "auto" : "0px"
            }}
          >
            <DragList data={d} key={d.name} type={3} />
          </Box>
        );
      })}
    </>
  );
}

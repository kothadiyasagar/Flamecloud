import { Box, Typography } from "@mui/material";
import DragList from "./DragList";

export default function Main({ data }) {
  return (
    <div className="main-div">
      <Box
        sx={{
          mb: "28px"
        }}
      >
        <Typography
          variant="p"
          component="p"
          fontWeight={400}
          lineHeight="19px"
          fontSize={14}
          textAlign="left"
          marginLeft="20px"
    
        >
          SOP
        </Typography>
        <Typography
          fontSize={32}
          fontWeight={700}
          lineHeight="44px"
          textAlign="left"
          marginLeft="20px"
        >
          Action Plans
        </Typography>
      </Box>
      {data.plans.map((plan, index) => {
        return <DragList data={plan} key={plan.name} type={1} />;
      })}
    </div>
  );
}

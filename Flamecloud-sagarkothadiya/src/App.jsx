import { Box } from "@chakra-ui/react";
import "./App.css";
import { DeleteTask } from "./components/DeleteTask";
import { PlanName } from "./components/PlanName";
import { PointerName } from "./components/PointerName";
import { SOPAccess } from "./components/SOPAccess";
import Main from "./components/Main";
import "./styles.css";

function App() {
  const data = {
    plans: [
      {
        name: "Marketing",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      },
      {
        name: "Design",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      },
      {
        name: "Sales",
        subComp: [
          {
            name: "Wordpress",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          },
          {
            name: "google drive",
            pointers: [
              { name: "pointer1" },
              { name: "pointer2" },
              { name: "pointer3" }
            ]
          }
        ]
      }
    ]
  };
  return (
    <div className="App">
      <Box id="dashbord">
        <Box>
        <DeleteTask></DeleteTask>
        <PlanName></PlanName>
        <PointerName></PointerName>
        <SOPAccess></SOPAccess>

      </Box>
   
      </Box>
      {/* <Main data={data} /> */}
    </div>
  );
}

export default App;

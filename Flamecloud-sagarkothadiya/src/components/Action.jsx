import React from "react";

import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from '@mui/icons-material/Delete';
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import styles from "./styles/Action.module.css";
import { useState } from "react";




const Action = () => {
  const [pointer, setpointer] = useState([{name:"Pointer 1","id":100},{name:"Pointer 2","id":200}]);       
  const [inputhere, setinputhere] = useState("");                           
  const [planinput,setplaninput] = useState("");                            
  const [newplan,setnewplan] = useState(['Production'])                   

  const [open, setOpen] = useState(false);                               
  const [opens, setOpens] = useState(false);                            
  const [open3,setOpen3] = useState(false)                              

                        
  
  const handlepointerfunction = () => {                                 
    setpointer([...pointer, inputhere]);
    setOpen(false);
    setinputhere("");
  };
  
  const handlenewplan = () => {                                        
     setnewplan([...newplan,planinput]);
     setOpens(false);
     setplaninput("")
  }
  
  const handleaccess = ()=>{
     setOpen3(false)
  }

  return (
    <div className={styles.maincontainer}>
      <div>
        <br />
        <p id={styles.sop}>SOP</p>
      </div>

      <div className={styles.actionbuttondiv}>
        <div>
          <p id={styles.title}>Action Plans</p>
        </div>
        <div id={styles.actionplanbuttons}>
          <Button variant="outlined" startIcon={<GroupIcon />} onClick={()=> setOpen3(true)}>
            Manage Access
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={()=>setOpens(true)}>
            New Plan
          </Button>
        </div>
      </div>
      <div className={styles.treeview}>

        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<DragIndicatorIcon />}
        >
          <TreeItem className={styles.treeitem} nodeId="1" label="Marketing">
            <TreeItem
              className={styles.treeitem}
              nodeId="2"
              label="Wordpress"
              icon={<DragIndicatorIcon />}
            />
            <TreeItem
              className={styles.treeitem}
             
              nodeId="3"
              label="Google Drive"
            >
              {pointer.map((item, index) => (
                <TreeItem key={index} className={styles.treeitem} nodeId={toString(index + 20)}   label={item.name}  icon={<DragIndicatorIcon />}> 
                  
                  </TreeItem>
              ))}
       
              <Button onClick={() => setOpen(true)}  variant="contained" startIcon={<AddIcon />}  color="inherit" >  Add Pointer  </Button>
            </TreeItem>
          </TreeItem>
          <TreeItem className={styles.treeitem} nodeId="5" label="Design">
            <TreeItem className={styles.treeitem} nodeId="6" label="OSS" />
          
          </TreeItem>
          <TreeItem className={styles.treeitem}  nodeId="20" label="Seller"  icon={<DragIndicatorIcon />} >   
          </TreeItem>

         { newplan?.map((el,index)=>(
            <TreeItem key={index} label={el} nodeId={toString(index+100)} icon={<DragIndicatorIcon />} className={styles.treeitem}></TreeItem>
          ))}
        </TreeView>
      </div>
    </div>
  );
};

export default Action;

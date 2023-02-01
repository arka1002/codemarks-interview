import "./styles.css";
import '@aws-amplify/ui-react/styles.css';
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import { useState } from "react";
import { Flex, Divider } from "@aws-amplify/ui-react";

function App() {
  
  return (
    <div className="App">
      
      <Flex direction="column">
        <Divider orientation="horizontal" />
      </Flex>
      <Sidebar/>
      

    </div>
  );
}

export default App;

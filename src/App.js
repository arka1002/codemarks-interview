import "./styles.css";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { Flex, Divider } from "@aws-amplify/ui-react";

function App() {
  //The sidebar logic here
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <p>
        <button className="p-4 border-2 border-indigo-600" onClick={handleViewSidebar}>&#9776;</button>
      </p>
      <Flex direction="column">
        <Divider orientation="horizontal" />
      </Flex>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default App;

import "./styles.css";
import '@aws-amplify/ui-react/styles.css';
import Sidebar from "./components/sidebar";
import Content from "./components/content";
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
        <button className="transition ease-in-out delay-50 border-solid border-2 border-indigo-600 px-4 py-4 rounded-md font-bold hover:bg-sky-500/50" onClick={handleViewSidebar}>&#9776;</button>
      </p>
      <Flex direction="column">
        <Divider orientation="horizontal" />
      </Flex>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <div className="flex justify-center">
        <Content />
      </div>

    </div>
  );
}

export default App;

import { useState } from "react";
import Folder from "../component/Folder";
import explorer from "../Data/FolderData";
import useTraverseTree from "../hooks/use-traverse-tree";

const FolderStructurePage = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div style={{ margin: "20px" }}>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default FolderStructurePage;

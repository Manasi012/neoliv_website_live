import React from 'react'
import FinalRevisedNeolivPMSillustration280125 from "../../Assets/pdf/FinalRevisedNeolivPMSillustration280125.xls";


const FileDownload = () => {

    const handleOpenFile = () => {
        window.open(FinalRevisedNeolivPMSillustration280125, "_blank", "noopener,noreferrer");
      };
      
      return (
        <button onClick={handleOpenFile} className="bg-blue-500 text-white px-4 py-2 rounded">
          Open File
        </button>
      );
      
    }
  export default FileDownload;

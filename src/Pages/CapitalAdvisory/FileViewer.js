import React from 'react'

 const FileViewer = ({ fileUrl }) => {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2">File Preview</h2>
        <iframe
          src={fileUrl}
          width="100%"
          height="600px"
          className="border border-gray-300"
        ></iframe>
      </div>
    );
  };

  export default FileViewer;
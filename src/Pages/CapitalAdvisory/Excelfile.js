import { useState } from "react";

const Excelfile = () => {
  const [password, setPassword] = useState("");
  const correctPassword = "12345"; // Change this to a secure way of verification

  const handleOpenFile = () => {
    if (password === correctPassword) {
      // Replace with your file path
      const filePath = "/files/secure-document.pdf"; // Place the file in public/files
      window.open(filePath, "_blank");
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-lg font-bold">Enter Password to Open File</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        className="border p-2 rounded"
      />
      <button
        onClick={handleOpenFile}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open File
      </button>
    </div>
  );
};

export default Excelfile;

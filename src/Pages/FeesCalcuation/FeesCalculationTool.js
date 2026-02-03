import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import IllustrationTable from "./IllustrationTable";
import { FeesCalculation } from "./Feescalculation";

const FeesCalculationTool = () => {
  const [activeTab, setActiveTab] = useState("Illustration");

  return (
    <div className="p-4">
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 ${activeTab === "Illustration" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          onClick={() => setActiveTab("Illustration")}
        >
          Illustration
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "FeesCalculation" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
          onClick={() => setActiveTab("FeesCalculation")}
        >
          Fees Calculation
        </button>
      </div>

      {activeTab === "Illustration" && <IllustrationTable />}
      {activeTab === "FeesCalculation" && <FeesCalculation />}
    </div>
  );
};

export default FeesCalculationTool;

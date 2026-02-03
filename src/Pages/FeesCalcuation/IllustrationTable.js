import React from "react";
import NotesTable from "./NotesTable";

const IllustrationTable = () => {
    const data = [
        { FeeIllustration: "Capital Contribution (Rs.)", values: ["1,00,00,000",
    "5,00,00,000",
    "25,00,00,000",
    "50,00,00,000",
    "1,00,00,00,000",
    "5,00,00,000"] },
        { FeeIllustration: "Management Fee (%age per annum)", values: ["1.00%", "1.00%", "1.00%", "0.00%", "0.00%", "0.00%"] },
        { FeeIllustration: "Operating Expenses (%age per annum)", values: ["1.00%", "1.00%", "1.00%", "1.00%", "1.00%", "1.00%"] },
        { FeeIllustration: "Carry (%age per annum)", values: ["17.50%", "15.00%", "12.50%", "12.50%", "10.00%", "0%"] },
        { FeeIllustration: "Hurdle Rate of Return", values: ["15.00%", "15.00%", "15.00%", "15.00%", "15.00%", "0%"] },
      ];

      const headers = ["Assumptions", "Class A1/ A6/ A11", "Class A2/ A7/ A12", "Class A3/ A8/ A13", "Class A4/ A9/ A14", "Class A5/ A10/ A15", "Class B"];

      const headers1Y = ["Class A1/ A6/ A11", "Class A2/ A7/ A12", "Class A3/ A8/ A13", "Class A4/ A9/ A14", "Class A5/ A10/ A15", "Class B"];

      const headers1 = [
        "FeeIllustration",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
      ];
      
     
      const fund = [
        { FeeIllustration: "Capital Contributed / Assets under Management", values: [
          "1,00,00,000", "97,64,000", "95,28,000", "92,92,000", "90,56,000", "88,20,000",
    "5,00,00,000", "4,88,20,000", "4,76,40,000", "4,64,60,000", "4,52,80,000", "4,41,00,000",
    "25,00,00,000", "24,41,00,000", "23,82,00,000", "23,23,00,000", "22,64,00,000", "22,05,00,000",
    "50,00,00,000", "49,41,00,000", "48,82,00,000", "48,23,00,000", "47,64,00,000", "47,05,00,000",
    "1,00,00,00,000", "98,82,00,000", "97,64,00,000", "96,46,00,000", "95,28,00,000", "94,10,00,000",
    "5,00,00,000", "4,94,10,000", "4,88,20,000", "4,82,30,000", "4,76,40,000", "4,70,50,000"
        ]},
      
        { FeeIllustration: "Gain / (Loss) on Investment based on the Scenario", values: [
          "", "", "", "", "", "-20,00,000", "", "", "", "", "", "-1,00,00,000",
          "", "", "", "", "", "-5,00,00,000", "", "", "", "", "", "-10,00,00,000",
          "", "", "", "", "", "-20,00,00,000", "", "", "", "", "", "-1,00,00,000"
        ]},
      
        { FeeIllustration: "Gross Value of the Portfolio at the end of the year", values: [
          "1,00,00,000", "97,64,000", "95,28,000", "92,92,000", "90,56,000", "68,20,000",
    "5,00,00,000", "4,88,20,000", "4,76,40,000", "4,64,60,000", "4,52,80,000", "3,41,00,000",
    "25,00,00,000", "24,41,00,000", "23,82,00,000", "23,23,00,000", "22,64,00,000", "17,05,00,000",
    "50,00,00,000", "49,41,00,000", "48,82,00,000", "48,23,00,000", "47,64,00,000", "37,05,00,000",
    "1,00,00,00,000", "98,82,00,000", "97,64,00,000", "96,46,00,000", "95,28,00,000", "74,10,00,000",
    "5,00,00,000", "4,94,10,000", "4,88,20,000", "4,82,30,000", "4,76,40,000", "3,70,50,000"
        ]},
      
        { FeeIllustration: "Operating Expenses (%age per annum)", values: [
          "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", 
    "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", 
    "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", 
    "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000", 
    "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", 
    "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000"
  ]},
      
        { FeeIllustration: "Management Fees", values: [
          "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", 
    "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", 
    "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", 
    "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000", 
    "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", 
    "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000"
  ]},
      
        { FeeIllustration: "Hurdle Value or as defined in the Co-investment PMS agreement", values: [
          "", "", "", "", "", "1,31,30,608", "", "", "", "", "", "6,56,53,038", 
    "", "", "", "", "", "32,82,65,191", "", "", "", "", "", "65,65,30,383", 
    "", "", "", "", "", "1,31,30,60,766", "", "", "", "", "", "0"
        ]}
      ];
      

      const headers2 = [
        "FeeIllustration",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
        "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6",
      ];
      
     
      const fundcapital = [
        {
          FeeIllustration: "Capital Contributed / Assets under Management",
          values: [
            "1,00,00,000",
            "97,64,000",
            "95,28,000",
            "92,92,000",
            "90,56,000",
            "88,20,000",
            "5,00,00,000",
            "4,88,20,000",
            "4,76,40,000",
            "4,64,60,000",
            "4,52,80,000",
            "4,41,00,000",
            "25,00,00,000",
            "24,41,00,000",
            "23,82,00,000",
            "23,23,00,000",
            "22,64,00,000",
            "22,05,00,000",
            "50,00,00,000",
            "49,41,00,000",
            "48,82,00,000",
            "48,23,00,000",
            "47,64,00,000",
            "47,05,00,000",
            "1,00,00,00,000",
            "98,82,00,000",
            "97,64,00,000",
            "96,46,00,000",
            "95,28,00,000",
            "94,10,00,000",
            "5,00,00,000",
            "4,94,10,000",
            "4,88,20,000",
            "4,82,30,000",
            "4,76,40,000",
            "4,70,50,000"
          ]
        },
        

        {
          "FeeIllustration": "Gain / (Loss) on Investment based on the Scenario",
          "values": [
            "", "", "", "", "", "1,98,59,840", "", "", "", "", "", "9,92,99,200", "", "", "", "", "",
            "49,64,96,000", "", "", "", "", "", "99,29,92,000", "", "", "", "", "", "1,98,59,84,000", "",
            "", "", "", "", "9,92,99,200"
          ]
        },
        
        

        {
          "FeeIllustration": "Gross Value of the Portfolio at the end of the year",
          "values": [
            "1,00,00,000", "97,64,000", "95,28,000", "92,92,000", "90,56,000", "2,86,79,840",
            "5,00,00,000", "4,88,20,000", "4,76,40,000", "4,64,60,000", "4,52,80,000", "14,33,99,200",
            "25,00,00,000", "24,41,00,000", "23,82,00,000", "23,23,00,000", "22,64,00,000", "71,69,96,000",
            "50,00,00,000", "49,41,00,000", "48,82,00,000", "48,23,00,000", "47,64,00,000", "1,46,34,92,000",
            "1,00,00,00,000", "98,82,00,000", "97,64,00,000", "96,46,00,000", "95,28,00,000", "2,92,69,84,000",
            "5,00,00,000", "4,94,10,000", "4,88,20,000", "4,82,30,000", "4,76,40,000", "14,63,49,200"
          ]
        },
        
          

          {
            "FeeIllustration": "Operating Expenses (%age per annum)",
            "values": [
              "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000",
              "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000",
              "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000",
              "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000", "59,00,000",
              "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000", "1,18,00,000",
              "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000"
            ]
          },
          

          {
            "FeeIllustration": "Management Fees",
            "values": [
              "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000", "1,18,000",
              "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000", "5,90,000",
              "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000", "29,50,000",
              "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
              "0", "0", "0", "0", "0", "0"
            ]
          },


          {
            "FeeIllustration": "Transaction costs (on actuals)",
            "values": [""]
          },

        {
    "FeeIllustration": "Gross Value of the Portfolio before Carry is charged",
    "values": [
      "97,64,000", "95,28,000", "92,92,000", "90,56,000", "88,20,000", "65,84,000",
      "48,82,00,000", "47,64,00,000", "46,46,00,000", "45,28,00,000", "44,10,00,000", "32,92,00,000",
      "2,44,10,00,000", "2,38,20,00,000", "2,32,30,00,000", "2,26,40,00,000", "2,20,50,00,000", "1,64,60,00,000",
      "4,94,10,00,000", "4,88,20,00,000", "4,82,30,00,000", "4,76,40,00,000", "4,70,50,00,000", "3,64,60,00,000",
      "9,88,20,00,000", "9,76,40,00,000", "9,64,60,00,000", "9,52,80,00,000", "9,41,00,00,000", "7,29,20,00,000",
      "49,41,00,000", "48,82,00,000", "48,23,00,000", "47,64,00,000", "47,05,00,000", "36,46,00,000"
    ]
  },


        { 
    "FeeIllustration": "Carry (%age per annum)",
    "values": ["", "", "", "", "", "0", "", "", "", "", "", "0", "", "", "", "", "", "0", "", "", "", "", "", "0", "", "", "", "", "", "0", "", "", "", "", "", "0"]
  },


  {
    "FeeIllustration": "Net Value of the Portfolio after Carry is charged",
    "values": [
        "97,64,000", "95,28,000", "92,92,000", "90,56,000", "88,20,000", "2,70,54,254",
        "4,88,20,000", "4,76,40,000", "4,64,60,000", "4,52,80,000", "4,41,00,000", "13,62,63,829",
        "24,41,00,000", "23,82,00,000", "23,23,00,000", "22,64,00,000", "22,05,00,000", "68,62,81,956",
        "49,41,00,000", "48,82,00,000", "48,23,00,000", "47,64,00,000", "47,05,00,000", "1,40,79,63,911",
        "98,82,00,000", "97,64,00,000", "96,46,00,000", "95,28,00,000", "94,10,00,000", "2,83,57,79,058",
        "4,94,10,000", "4,88,20,000", "4,82,30,000", "4,76,40,000", "4,70,50,000", "14,57,59,200"
    ]
},

       
        { FeeIllustration: "Carry calculation",  values: [] },
        {
    "FeeIllustration": "Hurdle Value or as defined in the Co-investment PMS agreement",
    "values": [
      "", "", "", "", "", "1,31,30,608", "", "", "", "", "", "6,56,53,038", "",
      "", "", "", "", "32,82,65,191", "", "", "", "", "", "65,65,30,383", "",
      "", "", "", "", "1,31,30,60,766", "", "", "", "", "", ""
    ]
  },

        {
    "FeeIllustration": "Amount on which Carry shall be applicable",
    "values": ["", "", "", "", "", "67,29,232", "", "", "", "", "", "3,36,46,162", "", "", "", "", "", "16,82,30,809", "", "", "", "", "", "33,64,61,617", "", "", "", "", "", "67,29,23,234", "", "", "", "", "", ""]
  },
  {
    "FeeIllustration": "Carry charged",
    "values": ["", "", "", "", "", "13,89,586", "", "", "", "", "", "59,55,371", "", "", "", "", "", "2,48,14,044", "", "", "", "", "", "4,96,28,089", "", "", "", "", "", "7,94,04,942", "", "", "", "", "", "0"]
  }
      ];



  return (
    <>
    <div className="overflow-auto p-4">
       <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header, index) => (
              <th key={index} className="border p-2 text-center text-xs">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border">
              <td className="border font-bold">{row.FeeIllustration}</td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex} className="border">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div>
      <h4 className="font-medium mt-4">Scenario I: Fund has made loss of - 20%	on initial capital contribution</h4>
    </div>
    <div className="overflow-auto p-4">
  <table className="min-w-full border border-gray-300">
    <thead>
      {/* First header row (Main Headers) */}
      <tr className="bg-gray-200">
        <th 
          className="border p-4 text-left bg-gray-300"
          rowSpan={2} // Fee Illustration spans two header rows
          style={{ minWidth: "200px" }} // Adjust width as needed
        >
          Fee Illustration
        </th>
        {headers1Y.map((header, index) => (
          <th 
            key={index} 
            className="border p-2 text-center text-xs"
            colSpan={6} // Each class group spans 6 subheaders (Year 1 - Year 6)
          >
            {header}
          </th>
        ))}
      </tr>

      {/* Second header row (Subheaders - Year 1 to Year 6 under each class group) */}
      <tr className="bg-gray-100">
        {headers1Y.map((_, index) => (
          <>
            {Array.from({ length: 6 }, (_, subIndex) => (
              <th key={`${index}-${subIndex}`} className="border p-2 text-center text-xs">
                Year {subIndex + 1}
              </th>
            ))}
          </>
        ))}
      </tr>
    </thead>
    <tbody>
      {fund.map((row, rowIndex) => (
        <tr key={rowIndex} className="border">
          <td className="border p-2 font-bold bg-gray-100 text-left">{row.FeeIllustration}</td>
          {row.values.map((value, colIndex) => (
            <td key={colIndex} className="border p-2 text-center">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>



    <div>
      <h4 className="font-medium mt-4">Scenario II: Fund has made no profit no loss - 0%	on initial capital contribution</h4>
    </div>
    <div className="overflow-auto p-4">
  <table className="min-w-full border border-gray-300">
    <thead>
      {/* First header row (Main Headers) */}
      <tr className="bg-gray-200">
        <th 
          className="border p-4 text-left bg-gray-300"
          rowSpan={2} // Fee Illustration spans two header rows
          style={{ minWidth: "200px" }} // Adjust width as needed
        >
          Fee Illustration
        </th>
        {headers1Y.map((header, index) => (
          <th 
            key={index} 
            className="border p-2 text-center text-xs"
            colSpan={6} // Each class group spans 6 subheaders (Year 1 - Year 6)
          >
            {header}
          </th>
        ))}
      </tr>

      {/* Second header row (Subheaders - Year 1 to Year 6 under each class group) */}
      <tr className="bg-gray-100">
        {headers1Y.map((_, index) => (
          <>
            {Array.from({ length: 6 }, (_, subIndex) => (
              <th key={`${index}-${subIndex}`} className="border p-2 text-center text-xs">
                Year {subIndex + 1}
              </th>
            ))}
          </>
        ))}
      </tr>
    </thead>
    <tbody>
      {fund.map((row, rowIndex) => (
        <tr key={rowIndex} className="border">
          <td className="border p-2 font-bold bg-gray-100 text-left">{row.FeeIllustration}</td>
          {row.values.map((value, colIndex) => (
            <td key={colIndex} className="border p-2 text-center">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>



    <div>
      <h4 className="font-medium mt-4">Scenario III: Fund has made profit of - 20%	XIRR on capital contributed</h4>
    </div>
    
    <div className="overflow-auto p-4">
  <table className="min-w-full border border-gray-300">
    <thead>
      <tr className="bg-gray-200">
        {/* <th 
          className="border p-4 text-left text-xs bg-gray-300"
          rowSpan={2} // Spanning both header and data rows
          style={{ width: "250px", minWidth: "250px", maxWidth: "250px" }} // Adjust as needed
        >
          Fee Illustration
        </th> */}
        {headers2.map((header, index) => (
          <th key={index} className="border p-2 text-left text-xs">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {fundcapital.map((row, rowIndex) => (
        <tr key={rowIndex} className="border">
          <td className="border p-2 font-bold bg-gray-100 text-left" style={{ width: "250px", minWidth: "250px", maxWidth: "250px" }}>
            {row.FeeIllustration}
          </td>
          {row.values.map((value, colIndex) => (
            <td key={colIndex} className="border p-2">{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div>
  <NotesTable />
</div>
    </>
  );
};

export default IllustrationTable;

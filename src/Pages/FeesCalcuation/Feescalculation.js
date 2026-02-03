import React, { useState, useRef } from "react";
import FeesTable from "./FeesTable";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const FeesCalculation = () => {
  const [capital, setCapital] = useState("");
  const [management, setManagement] = useState("");
  const [transaction, setTransaction] = useState("");

  const pdfRef = useRef(null);

  const handleDownloadPDF = () => {
    if (!pdfRef.current) {
      console.error("⚠️ pdfRef is null! Ensure the component is mounted.");
      return;
    }

    const pdfTopMargin = 15;
    const headingText = "One Year - Fixed Fee";
    const assumptionsText = "Assumptions:";

    // Step 1: Replace ALL inputs (editable & readonly) with Spans
    const inputs = pdfRef.current.querySelectorAll("input");
    const replacements = [];

    inputs.forEach((input) => {
      const span = document.createElement("span");
      span.textContent = input.value || " "; // Ensure blank fields are captured
      span.style.cssText = input.style.cssText;
      span.className = input.className;
      span.style.border = "1px solid #ddd"; // Mimic input border
      span.style.padding = "5px"; // Adjust padding
      span.style.display = "inline-block"; // Ensure inline-block behavior
      span.style.width = `${input.clientWidth}px`; // Match input width

      input.parentNode.replaceChild(span, input);
      replacements.push({ span, input });
    });

    // Step 2: Capture PDF
    html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
    })
      .then((canvas) => {
        // Step 3: Restore Original Inputs
        replacements.forEach(({ span, input }) => {
          span.parentNode.replaceChild(input, span);
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.7);
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 190;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = pdfTopMargin + 10;

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text(headingText, 10, pdfTopMargin);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(12);
        pdf.text(assumptionsText, 10, pdfTopMargin + 7);

        pdf.addImage(
          imgData,
          "JPEG",
          10,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        heightLeft -= pageHeight - position;

        while (heightLeft > 0) {
          pdf.addPage();
          position = 10;
          pdf.addImage(
            imgData,
            "JPEG",
            10,
            position,
            imgWidth,
            imgHeight,
            "",
            "FAST"
          );
          heightLeft -= pageHeight;
        }

        pdf.save("FeesCalculation.pdf");
      })
      .catch((err) => console.error("❌ PDF Generation Error:", err));
  };

  return (
    <div className="md:mx-40 lg:mx-20 mx-2 my-5 px-0 text-left">
      <h2 className="pb-5 pt-2 font-bold text-xl text-blue-950">
        One Year - Fixed Fee
      </h2>
      <p>Assumptions:</p>

      {/* ✅ Wrap content with pdfRef */}
      <div ref={pdfRef}>
        <form>
          <table className="w-100 border-collapse border border-gray-400 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 text-sm">
                  Description
                </th>
                <th className="border border-gray-400 px-4 py-2 text-sm"></th>
                <th className="border border-gray-400 px-4 py-2 text-sm">
                  Value (Rs.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Capital Contribution (Rs)
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  a
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    placeholder="1,00,00,000"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value={capital}
                    autoFocus
                    onChange={(e) => setCapital(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Management Fee (%age per annum)
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  b
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    placeholder="1.00%"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value={management}
                    onChange={(e) => {
                      let inputValue = e.target.value.replace("%", ""); // Remove any existing %
                      setManagement(inputValue + "%"); // Append % back
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Operating Expenses (%age per annum)
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  c
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value="1.00%"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Performance Carry (%age per annum)
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  d
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value="17.50%"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Hurdle Rate of Return
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  e
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value="15.00%"
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-400 px-4 py-1 text-left">
                  Actual gain/loss on Investment (XIRR on capital contribution)
                </td>
                <td className="border border-gray-400 px-4 py-1 text-center w-3">
                  f
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  <input
                    type="text"
                    placeholder="20%"
                    className="border-gray-400 w-full px-2 py-1 outline-0"
                    value={transaction}
                    onChange={(e) => {
                      let inputValue = e.target.value.replace("%", ""); // Remove any existing %
                      setTransaction(inputValue + "%"); // Append % back
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="md:flex block justify-between items-center mt-2">
        <div className="space-x-6 md:mt-0">
         
          <button
      onClick={() => {
        setCapital("");
        setTransaction(""); 
        setManagement(""); 
      }}
      type="button"
      className="bg-red-500 mt-5 text-white py-1 px-5 rounded-lg"
    >
      Reset
    </button>
    <button
            onClick={handleDownloadPDF}
            type="button"
            className="bg-indigo-600 text-white py-1 px-5 rounded-lg"
          >
            PDF
          </button>
          {/* <button
            type="button"
            className="bg-indigo-600 text-white py-1 px-5 rounded-lg"
          >
            Notes
          </button> */}
        </div>
      </div>
        
        <FeesTable
          capital={capital}
          management={management}
          operating="1.00"
          hurdleRate="15.00"
          performanceCarry="17.50"
          transaction={transaction}
        />
      </div>

     
    </div>
  );
};

import React from 'react'

export const FeesCalcNotes = () => {

    const notes = [
        "The format and contents of the illustration provided below are indicative and non-binding, and provided for reference only, and investors should review and examine the detailed terms mentioned in the Co-investment PMS agreement.",
        "In the illustration, Management fee is assumed to be charged annually as defined under the Co-investment PMS agreement, as permitted under SEBI regulations.",
        "In the Illustration Operating Expenses are charged on Capital contributed and includes Account Opening charges, stamp duty /Audit Fee/ Bank charges / Fund Accounting charges / Custody Fee / demat charges or other miscellaneous expense.",
        "For the purposes of the illustration, Transaction cost has not been considered and shall be charged on actual basis.",
        "All Fees and charges (including carry) shall be subject to applicable taxes i.e. we have considered Goods and Service Tax (GST) on all the fees and charges considered above (including carry).",
        "The details provided above are subject to appropriate relevant assumptions.",
        "The figures provided in this illustration are representational only and should not be considered as a guarantee or any definite indication of performance. The final outcome would be a result of several factors as stated in the Co-investment PMS agreement and would be dependent upon the actual performance.",
        "Further, for illustration purposes only, we have assumed that the exit shall be at the end of the fund life/end of the term as per the Co-investment PMS agreement.",
        "We have assumed the term of the Co-investment PMS agreement as period of 6 (six) years."
      ];
    
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 text-left">No.</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 text-left">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

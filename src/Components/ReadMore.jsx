import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.slice(0, maxLength) + (text.length > maxLength ? "..." : "") : text;

  return (
    <div>
      <span style={{ whiteSpace: "pre-wrap" }}>
        {displayText}
      </span>
      {text.length > maxLength && (
        <button
          onClick={toggleTruncate}
          className="text-white font-medium cursor-pointer underline focus:outline-none"
          style={{ display: "inline", marginLeft: "5px" }}
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

const App = () => {
  const longText = `
With a singular vision to create India’s Foremost Residential Real Estate Platform in the vast opportunity that real estate investment and development offers, Mohit is the mind, body, and soul behind the formation of NeoLiv.

Mohit has deep expertise in capital management, project development and property management over the past two decades. During his highly successful career at Godrej Properties Limited (GPL) which spanned nearly 12 years, he was instrumental in adding 90+ new projects spanning 150 Mn sq ft. In 2012 Mohit was given additional charge of P&L for the NCR region and within 2 years, GPL emerged as the largest developer in Gurgaon by sales. Mohit was appointed to GPL’s Board of Directors as an Executive Director in 2015 and became MD & CEO in April 2017.

As MD & CEO of Godrej Properties, Mohit established the company as the number one player in the national market, with a pan-India dominance in each of the four major cities (Delhi-NCR, Mumbai MMR, Bengaluru, and Pune). Mohit is known to have transformed the company from a relatively unknown player to a market leader as sales grew a stunning 30x during this period. Under his astute leadership, GPL’s market capitalization grew from USD 1.5 Bn to USD 6.2 Bn (34% CAGR; vs. 18% for peer groups), and the company added USD 1.5 Bn in new deals (9x vs. previous 5 years). In the same duration, GPL saw a +75% improvement in Net Promoter Scores, from -20% in FY18 to +55% in FY22, while multifamily sales grew +30% CAGR (2017-2022) vs. a +11% industry average.

Mohit is a Mechanical Engineer and has an MBA from the Indian Institute of Management (IIM), Calcutta.
  `;

  return (
    <div className="mt-8 leading-7 z-50">
      <ReadMore text={longText} maxLength={345} />
    </div>
  );
};

export default App;

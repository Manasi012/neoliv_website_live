import React, { useState } from "react";

const Partners_mobile = () => {
  const [tooltip, setTooltip] = useState(null);

  const handleImageClick = (index) => {
    setTooltip(index);
  };

  const handleCloseTooltip = (event) => {
    event.stopPropagation();
    setTooltip(null);
  };

  const images = [
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png",
      name: "Harshwardhan",
      Description: "Prasad",
    },
    // {
    //   src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3xy0rSIDDHARTH%20KOLTE_11zon.png",
    //   name: "Siddharth",
    //   Description: "Kolte",
    // },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3ycbcCHANDAN%20KAR_11zon.png",
      name: "Chandan",
      Description: "Kar",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3yqteBHASKER%20JAIN_11zon.png",
      name: "Bhasker",
      Description: "Jain",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png",
      name: "Siddharth",
      Description: "Jain",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png",
      name: "Tej",
      Description: "Ingle",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmrn9Hariprakash.png",
      name: "Hariprakash",
      Description: "Pandey",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmwrsViral.png",
      name: "Viral",
      Description: "Vora",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4k8b9lye355fsWhatsApp%20Image%202024-07-09%20at%2012.48.22_c0f6df4b.jpg",
      name: "Bhushan",
      Description: "Saney",
    },
        {
      src: "https://magicpage-dev.propstory.com/ImageUploads/Image_Upload/1nnx5eapkmdvy55e8.webp",
      name: "Milind Apte",
      Description: "Partner",
       style: "padding: 0.5rem;",
    },
  ];

  const tabContents = [
    {
      name: "Harshwardhan Prasad",
      about: `Has successfully secured 15 projects in NCR with ~25 Mn Sqft of development potential. Held leadership positions with Indian developers.`,
      abouthobby:
        " He finds his yin-yang in playing tennis and enjoying delicious food.",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },

    // {
    //   name: "Siddharth Kolte",
    //   about: `Has 25+ years of experience in fundraising, land acquisition, Indian & International real estate policy making.`,
    //   abouthobby:
    //     "He relishes playing badminton, finds joy in music, and cherishes quality time spent with his family.",
    //   progress: [
    //     { year: "1999", company: "MBA", completed: true },
    //     { year: "2000", company: "Exim Bank", completed: true },
    //     { year: "2001", company: "JM Morgan Stanley", completed: true },
    //     { year: "2003", company: "BNP Paribas", completed: true },
    //     {
    //       year: "2005",
    //       company: "Independent Financial Consultant",
    //       completed: true,
    //     },
    //     {
    //       year: "2009",
    //       company: "Vilasrao Deskhmukh Foundation",
    //       completed: true,
    //     },
    //     { year: "2013", company: "Sugee Group", completed: true },
    //     { year: "2015", company: "Transcon Developers", completed: true },
    //     { year: "2021", company: "Rustomjee Group", completed: true },
    //     { year: "2023", company: "NeoLiv", completed: true },
    //   ],
    // },

    {
      name: "Chandan Kar",
      about:
        "Launched 3 new brands and 43 new projects, with a cumulative sales of 59 Mn Sqft. Held leadership positions with Indian and International developers.",
      abouthobby:
        "His passion for cricket is unwavering, he thrives on travel adventures, and finds inspiration in the pages of marketing books.",
      progress: [
        { year: "2005", company: "MBA", completed: true },
        { year: "2007", company: "Essar Holding", completed: true },
        { year: "2008", company: "Unitech", completed: true },
        { year: "2010", company: "Ireo", completed: true },
        { year: "2012", company: "Experion Holding", completed: true },
        { year: "2014", company: "Godrej", completed: true },
        { year: "2018", company: "Emaar", completed: true },
        { year: "2021", company: "Country Garden", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Bhasker Jain",
      about:
        "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, was managing P&L of USD 250 Mn.",
      abouthobby:
        "He cherishes Ghazals and classical music, and exploring historical and cultural places fuels his wanderlust.",
      progress: [
        { year: "2006", company: "MBA", completed: true },
        { year: "2009", company: "Godrej", completed: true },
        { year: "2016", company: "The Wadhwa Group", completed: true },
        // { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Siddharth Jain",
      about:
        "Won ET 30under30 future business leaders in 2019. Has secured 15 projects across MMR, NCR and Pune with ~20 Mn Sqft of development potential.",
      abouthobby:
        "He finds fulfillment in sports, treasures moments with family, and seeks excitement in discovering new destinations.",
      progress: [
        { year: "2011", company: "Future First", completed: true },
        { year: "2014", company: "MBA", completed: true },
        { year: "2016", company: "Godrej", completed: true },
        { year: "2022", company: "Macro Tech (LODHA)", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Tej Ingle",
      about:
        "Has successfully designed 48 Mn Sq ft of high quality residential, township, retail, commercial developments.",
      abouthobby:
        "He enjoys sketching, indulges in voracious reading, and loves immersing himself in movies and cricket matches.",
      progress: [
        { year: "1997", company: "Architect Reza Kabul", completed: true },
        { year: "1999", company: "Gayatri Construction", completed: true },
        { year: "2001", company: "B Methalia", completed: true },
        { year: "2003", company: "Dalal Mott Macdonald ", completed: true },
        { year: "2005", company: "Mahindra Gesco Ltd ", completed: true },
        { year: "2007", company: "Peninsula Land ", completed: true },
        { year: "2008", company: "Godrej", completed: true },
        { year: "2015", company: "Raymond Realty", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Hariprakash Pandey",
      about:
        "Proven track record of 22 years in fund raise, financial business planning, risk management, compliance, taxation.​",
      abouthobby:
        "Hari likes playing sports and reading books. He is also a coach on finance and investment strategies.",
      progress: [
        { year: "2000", company: "Goldstar Jewellery", completed: true },
        { year: "2003", company: "ICS Group ", completed: true },
        { year: "2005", company: "HDIL", completed: true },
        { year: "2014", company: "Runwal", completed: true },
        { year: "2024", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Viral P Vora",
      about:
        "Has experience of 32+ years as a retainer legal and advocate. He is on the Rolls of Solicitors in England & Wales, presently non-practising.",
      abouthobby:
        "He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
      progress: [
        {
          year: "1997",
          company: "Strategic Consultant with STATE PWD, MES, CCW AIR etc",
          completed: true,
        },
        // { year: "2001", company: "Independent Contractor", completed: true },
        { year: "2005", company: "DLF", completed: true },
        { year: "2006", company: "Raheja Universal Ltd", completed: true },
        {
          year: "2008",
          company: "VPV Legal",
          completed: true,
        },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Bhushan Saney",
      about:
        "Bhushan has over 34 years of experience in Indian Real estate and has in depth and nuanced knowledge of Execution and operations with expertise on Contracts , Procurement, Estimation and Quality Control.",
        abouthobby:
        "He is an enthusiastic reader of books, loves to explore new destinations and experiment global food styles. His favourite sport is cricket and in his free time he likes to spend time with family.",

      progress: [
        {
          year: "1990",
          company: "Mokha Constructions",
          completed: true,
        },
        // { year: "2001", company: "Independent Contractor", completed: true },
        { year: "1993", company: "Gondawana Engineers", completed: true },
        { year: "1995", company: "UB Engineering Ltd", completed: true },
        {
          year: "1999",
          company: "Ultratech Cement Limited",
          completed: true,
        },
        {
          year: "2005",
          company: "IVRCL Limited",
          completed: true,
        },
        {
          year: "2013",
          company: "Sobha Develpoers",
          completed: true,
        },
        {
          year: "2014",
          company: "Godrej Properties Limited",
          completed: true,
        },
        {
          year: "2019",
          company: "Emaar India Limited",
          completed: true,
        },
        {
          year: "2020",
          company: "Godrej Fund Management",
          completed: true,
        },
        { year: "2024", company: "NeoLiv", completed: true },
      ],
    },
     {
      name: "Milind Apte",
      about:
        "Milind is a Senior, strategic & seasoned Human Resources Leader with 36 years of diverse experience across Real Estate, FMCG, Logistics & Public Sector Organisations. He has experience in leading HR for large Organisations and guiding them through high growth & tumultuous periods.",
        abouthobby:
        // "He has expertise in entire gamut of HR Function and processes, leading large teams, delivering best in class HR products, implementing global best practices, managing change & transformation & employee relations.",
        "He is a big fan of Action movies, loves to read books which improve his understanding of Humans and motivation and loves to travel.",
      progress: [
        {
          year: "1989",
          company: "Mumbai Port\u00A0Trust",
          completed: true,
        },
        // { year: "2001", company: "Independent Contractor", completed: true },
        { year: "1990", company: "LIC\u00A0of India", completed: true },
        { year: "1995", company: "Johnson\u00A0& Johanson Ltd", completed: true },
        {
          year: "1997",
          company: "Cadbury India Limited",
          completed: true,
        },
        {
          year: "2007",
          company: "DHL Express",
          completed: true,
        },
        {
          year: "2009",
          company: "Godrej Hershey Ltd",
          completed: true,
        },
        {
          year: "2012",
          company: "Godrej Properties Ltd",
          completed: true,
        },
        {
          year: "2017",
          company: "Ceat Tyres",
          completed: true,
        },
        {
          year: "2023",
          company: "KEC International Limited",
          completed: true,
        },
        { year: "2025", company: "NeoLiv", completed: true },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 md:hidden">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative"
            onClick={() => handleImageClick(index)}
            style={{ transition: "box-shadow 0.3s" }}
          >
            <img src={image.src} alt={image.name} className="w-full h-auto" />
            <h3 className="text-center mt-2 font-medium">{image.name}</h3>
            <p className="text-center font-medium">{image.Description}</p>
            {tooltip === index && (
              <div className="fixed top-0 left-1/2 md:w-[78%] w-96 transform z-50 h-screen pb-2 md:pb-24 -translate-x-1/2 bg-white border shadow-lg border-blue-950 p-8 rounded-lg">
                <button
                  onClick={handleCloseTooltip}
                  className="absolute top-2 right-7 text-4xl font-bold"
                >
                  &times;
                </button>
                <div className="text-left mb-4 scrollbar" id="style-8">
                  <div className="force-overflow">
                    {/* <p className="text-xl mb-3 font-semibold">About</p> */}
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-32 h-auto rounded-full border-4 border-indigo-800 mx-auto mb-4"
                    />
                    <h4 className="mb-2 font-bold text-lg text-center">
                      {tabContents[index]?.name}
                    </h4>
                    <p className="text-md text-center font-medium">
                      {tabContents[index]?.about}
                    </p>
                    <p className="text-md font-medium italic text-center pt-4 text-indigo-800">
                      {tabContents[index]?.abouthobby}
                    </p>
                    <p className="text-lg font-semibold pt-5">Journey</p>
                    <div className="v-progress font-medium">
                      <ul>
                        {tabContents[index]?.progress.map(
                          (progressItem, progressIndex) => (
                            <li
                              key={progressIndex}
                              className={`v-progress-item ${
                                progressItem.completed ? "completed" : ""
                              }`}
                            >
                              {progressItem.year} {progressItem.company}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* <div className="space-y-2">
                      <h3 className="text-[15px] font-medium text-justify md:mt-24">
                        <small className="font_size_small">"NeoLiv is India’s foremost fund led developer founded by Mohit Malhotra, <a href="https://www.360.one"  className="text-blue-700" target="_blank">360 ONE</a> and industry experts. With our unique integrated platform of a SEBI approved equity AIF fund, in-house development arm, and property management vertical, we are driven by our vision to re-ignite the joy of living experiences through our wellness-inspired developments in India. To know more about us, please visit <a href="https://www.neoliv.in" className="text-blue-700" target="_blank">www.neoliv.in</a>.",</small>
                      </h3>
                    </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners_mobile;

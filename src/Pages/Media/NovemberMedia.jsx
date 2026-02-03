import React from "react";
import Card from "../Card";
import BackButton from "../../Components/BackButton";

const NovemberMedia = () => {
  const cardData = [
    {
      description:
        "GOLF COURSE EXTENSION ROAD: A REAL ESTATE HOTSPOT IN GURUGRAM",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4kig1lpm8d1nsFinancial-Express-2560x2045.jpg",
      date: "November 29, 2023",
      linkUrl:
        "https://www.financialexpress.com/money/golf-course-extension-road-a-real-estate-hotspot-in-gurugram-3320768/",
    },
    {
      description:
        "FESTIVE SEASON FUELS ROBUST GROWTH IN MUMBAI’S REAL....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4kig1lpm8dau9Construction-Week-2560x2045.jpg",
      date: "November 29, 2023",
      linkUrl:
        "https://www.constructionweekonline.in/business/festive-season-fuels-robust-growth-in-mumbais-real-estate-market",
    },
    {
      description: "GURUGRAM HAS THRIVING REAL ESTATE",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmotpdsUntitled%20design%20-%202023-07-03T152740.344.png",
      date: "November 29, 2023",
      linkUrl:
        "https://www.rprealtyplus.com/interviews/gurugram-has-thriving-real-estate-113092.html",
    },
  ];

  return (
    <>
      <div>
        <BackButton />
      </div>
      <div className="md:mx-20 md:py-20 mx-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card-container"
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <Card
                imageUrl={card.imageUrl}
                description={card.description}
                date={card.date}
                linkUrl={card.linkUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NovemberMedia;

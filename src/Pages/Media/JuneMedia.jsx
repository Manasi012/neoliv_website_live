import React from "react";
import Card from "../Card";
import BackButton from "../../Components/BackButton";

const JuneMedia = () => {
  const cardData = [
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmhu3chUntitled%20design%20-%202023-07-03T120320.878.png",
      date: "June 30, 2023",
      linkUrl:
        "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/neoliv-inks-strategic-alliance-with-360-one-amidst-150-million-fund-raise-plan/articleshow/101393019.cms",
    },
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmifto1Untitled%20design%20-%202023-07-03T120344.867.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.business-standard.com/industry/news/neoliv-to-raise-150-mn-aif-to-take-residential-bets-360-one-funds-123063000950_1.html",
    },
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmph4erUntitled%20design%20-%202023-07-03T154550.366.png",
      date: "June 30, 2023",
      linkUrl:
        "https://businessworld.in/article/want-to-bring-back-joy-of-home-ownership-mohit-malhotra-neoliv-482624",
    },
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmi85amUntitled%20design%20-%202023-07-03T120403.908_11zon.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.moneycontrol.com/news/business/real-estate/360-one-invests-in-neoliv-a-real-estate-platform-founded-by-former-godrej-properties-md-10884231.html",
    },
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmictpiUntitled%20design%20-%202023-07-03T120622.884.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.vccircle.com/360one-bets-on-former-godrej-properties-exec-s-real-estate-investment-platform",
    },
    {
      description:
        "NEOLIV INKS STRATEGIC ALLIANCE WITH 360 ONE AMIDST $150 MILLION FUND RAISE PLAN",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmojxqs96716870.jpg",
      date: "June 30, 2023",
      linkUrl:
        "https://www.vccircle.com/360one-bets-on-former-godrej-properties-exec-s-real-estate-investment-platform",
    },
    {
      description: "IN CONVERSATION WITH 360 ONE’S MANAGEMENT",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmonkqcUntitled%20design%20-%202023-07-03T152216.800_11zon%20%281%29.png",
      date: "June 30, 2023",
      linkUrl: "https://www.youtube.com/watch?v=LFiWzxj3mcs",
    },
    {
      description:
        "KYC में NEOLIV का मैनेजमेंट, MID-INCOME REALTY PROJECT में निवेश करेगी NEOLIV ",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmi0z6yUntitled%20design%20-%202023-07-03T120211.812_11zon.png",
      date: "June 30, 2023",
      linkUrl: "https://www.youtube.com/watch?v=UtIbbXcDqU8",
    },
    {
      description:
        "WEALTH MANAGER 360 ONE PICKS UP STAKE IN REALTY PLATFORM NEOLIV",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmibp08Untitled%20design%20-%202023-07-03T120542.449.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.thehindu.com/business/wealth-manager-360-one-picks-up-stake-in-realty-platform-neoliv/article67027874.ece",
    },
    {
      description:
        "360 ONE BETS ON FORMER GODREJ PROPERTIES EXEC’S REAL ESTATE INVESTMENT PLATFORM",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmictpiUntitled%20design%20-%202023-07-03T120622.884.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.vccircle.com/360one-bets-on-former-godrej-properties-exec-s-real-estate-investment-platform",
    },
    {
      description: "360 ONE ENTERS INTO STRATEGIC PARTNERSHIP WITH NEOLIV",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmotpdsUntitled%20design%20-%202023-07-03T152740.344.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.rprealtyplus.com/news-views/360-one-enters-into-strategic-partnership-with-neoliv-111245.html",
    },
    {
      description:
        "NEOLIV TO RAISE $150 MN AIF TO TAKE RESIDENTIAL 360 ONE FUNDS",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmp215eUntitled%20design%20-%202023-07-03T153337.896_11zon.png",
      date: "June 30, 2023",
      linkUrl: "https://in.shafaqna.com/EN/AL/6097105",
    },
    {
      description:
        "NEOLIV TO RAISE USD 150 MN AIF TO TAKE RESIDENTIAL BETS; GETS FUNDING...",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmiepf4Untitled%20design%20-%202023-07-03T120433.749_11zon%20%281%29.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.newsdrum.in/business/neoliv-to-raise-usd-150-mn-aif-to-take-residential-bets-gets-funding-from-360-one",
    },
    {
      description:
        "NEOLIV TO RAISE USD 150 MN AIF TO TAKE RESIDENTIAL BETS; GETS FUNDING...",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmp5ocgUntitled%20design%20-%202023-07-03T153653.582.png",
      date: "June 30, 2023",
      linkUrl:
        "https://www.latestly.com/agency-news/latest-news-neoliv-to-raise-usd-150-mn-aif-to-take-residential-bets-gets-funding-from-360-one-5236637.html",
    },
    {
      description:
        "360 ONE REVOLUTIONIZES INDIAS RESIDENTIAL REAL ESTATE SECTOR WITH.....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmih72gUntitled%20design%20-%202023-07-03T120513.574.png",
      date: "June 30, 2023",
      linkUrl:
        "https://realtynxt.com/residential-news/2023-06-30/360-one-revolutionizes-indias-residential-real-estate-sector-with-strategic-investment-in-neoliv",
    },
    {
      description: "360 ONE ENTERS INTO STRATEGIC PARTNERSHIP WITH NEOLIV",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmp9qyrUntitled%20design%20-%202023-07-03T153956.594_11zon.png",
      date: "June 30, 2023",
      linkUrl:
        "https://businesswebnews.blogspot.com/2023/06/360-one-enters-into-strategic.html",
    },
    {
      description:
        "360 ONE REVOLUTIONIZES INDIAS RESIDENTIAL REAL ESTATE SECTOR WITH ....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmpbeiqN_LOGO1.png",
      date: "June 30, 2023",
      linkUrl:
        "https://nationalheraldnews.com/360-one-enters-into-strategic-partnership-with-neoliv-with-minority-entity-level-investment-amidst-neolivs-planned-aif-fund-raise-of-us-150-mn/",
    },
    {
      description:
        "360 ONE TODAY ANNOUNCED A STRATEGIC EQUITY INVESTMENT IN NEOLIV- INDIA’S FOREMOST RESIDENTIAL....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmpd07scropped-Mumbai_News_Express_.png",
      date: "June 30, 2023",
      linkUrl:
        "https://mumbainewsexpress.com/360-one-today-announced-a-strategic-equity-investment-in-neoliv-indias-foremost-residential-platform/",
    },
    {
      description:
        "360 ONE ENTERS INTO STRATEGIC PARTERSHIP WITH NEOLIV WITH MINORITY....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljmi5pxrUntitled%20design%20-%202023-07-03T120718.332.png",
      date: "June 30, 2023",
      linkUrl:
        "https://investmentguruindia.com/IndustryNews/360-One-enters-into-strategic-partership-with-NeoLiv-with-Minority-entity-level-investment-amidst-NeoLivs-planned-AIF-Fund-raise-of-US-150-Mn",
    },
    {
      description:
        "NEOLIV TO RAISE $150 MN AIF TO TAKE RESIDENTIAL BETS; 360 ONE FUNDS",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn4vetkUntitled%20design%20-%202023-07-03T225653.684.png",
      date: "June 30, 2023",
      linkUrl: "https://beamstart.com/",
    },

    {
      description:
        "NEOLIV TO RAISE USD 150 MN AIF TO TAKE RESIDENTIAL BETS; GETS FUNDING....",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn4ppm7Untitled%20design%20-%202023-07-03T225225.943.png",
      date: "June 30, 2023",
      linkUrl:
        "https://mybigplunge.com/startups/funding-news/neoliv-to-raise-usd-150-mn-aif-to-take-residential-bets-gets-funding-from-360-one/",
    },

    {
      description:
        "NEOLIV TO RAISE $150 MN AIF TO TAKE RESIDENTIAL BETS; 360 ONE FUNDS",
      imageUrl:
        "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn4rd95Untitled%20design%20-%202023-07-03T225345.677.png",
      date: "June 30, 2023",
      linkUrl:
        "https://news.knowledia.com/IN/en/articles/neoliv-to-raise-150-mn-aif-to-take-residential-bets-360-one-funds-6c303dd3308443706db7ea578106fdd11d959324",
    },
  ];

  return (
    <>
      <div>
        <BackButton />
      </div>
      <div className="md:mx-20 md:py-20 mx-5 py-10 tab_margin">
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
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:pt-20 pt-8"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljnzxdjeNEWS-01.jpg"
            alt="Image 1"
            className="border border-blue-950 rounded-lg  w-full md:h-96 h-64"
          />
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn5e9v5Dainik%20Ekmat.png"
            alt="Image 2"
            className="border border-blue-950 rounded-lg w-full md:h-96 h-64"
          />
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn5fda1Samachar_11zon.jpeg"
            alt="Image 3"
            className="border border-blue-950 rounded-lg  w-full md:h-96  h-64"
          />
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwljn5fzhdMatrubhumi.jpeg"
            alt="Image 4"
            className="border border-blue-950 rounded-lg w-full md:h-96 h-64"
          />
        </div>
      </div>
    </>
  );
};

export default JuneMedia;

import React from "react";
import HeadLine from "../global/HeadLine";
import { homePageSubTitle, homePageTitle } from "../consts";

const HomePage = (props) => {
  return (
    <div>
      <HeadLine
        cssClass="homePageTitle"
        title={homePageTitle}
        subTitle={homePageSubTitle}
        subTitleClass="homePageSubTitleClass"
        titleClass="homePageTitleClass"
      />
    </div>
  );
};

export default HomePage;

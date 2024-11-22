import React from "react";
import Herosection from "../components/Herosection";
import Testimonials from "../components/Testimonials";
import PageTitle from "../components/PageTitle";
import CaseStudies from "../components/CaseStudies";

const Home = () => {
  return (
    <>
      <PageTitle title="Hirkaab | Home" />
      <Herosection />
      <Testimonials />
      <CaseStudies/>
    </>
  );
};

export default Home;

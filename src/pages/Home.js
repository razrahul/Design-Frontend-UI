import React from "react";
import Hero from "../containers/Home/Hero"
import AboutSection from "../containers/Home/AboutSection";
import ServicCaro from "../containers/Service/carousel";
import ServicCaro2 from "../containers/Service/carosal2.js";
import ReviewsPage from  "../containers/Home/OurReviews.js"
import WhyChooseUs from "../containers/whyChoose/WhyChooseUs.js"
import ContactBanner from "../components/contact/ContactBanner.js";
import Footer from "../components/footer/intex.js";
import Slider from "../components/cruousel2";
import OurServices from "../components/Services/OurServices.js";

 function Home() {
  return (
    <>
    {/* <Nav /> */}
    <Hero />
    <AboutSection />

    {/* <ServicCaro /> */}
    <ServicCaro2 />

    {/* <Slider /> */}
    {/* <OurServices /> */}

    <WhyChooseUs />
    
    <ReviewsPage />
    <ContactBanner />
    <Footer />
    </>
   
  );
}

export default Home;

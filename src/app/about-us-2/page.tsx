import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import OurLatestBlogPosts from "@/components/Common/OurLatestBlogPosts";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";
import AboutMe from "@/components/HealthCoach/AboutMe";
import NewBranding from "@/components/LifeCoach/NewBranding";
import FeedbackSliderFour from "@/components/Common/FeedbackSliderFour";
import Trainer from "@/components/HealthCoach/Trainer";

export default function AboutUsPage2() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="About Us 2"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff] pt-[50px] md:pt-[80px] lg:pt-[140px]">

        <AboutMe />

        <NewBranding />

        <FeedbackSliderFour />

        <Trainer />
 
        <div className="py-[50px] md:py-[60px] lg:py-[140px]">
          <OurLatestBlogPosts />
        </div>

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

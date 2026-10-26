import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Services from "@/components/Common/Services";
import AboutMe from "@/components/OnlineTrainingCoach/AboutMe";
import AboutUs from "@/components/OnlineTrainingCoach/AboutUs";
import WorkingProcess from "@/components/Common/WorkingProcess";
import FeedbackSlider from "@/components/Common/FeedbackSlider";
import OurLatestBlogPosts from "@/components/Common/OurLatestBlogPosts";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";

export default function AboutUsPage() {
  return (
    <>
  

      <PageBannerTitle
        title="About Us"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <div className="pt-[50px] md:pt-[80px] lg:pt-[140px]">
          <AboutMe />

          <AboutUs />
        </div>

        <Services />

        <WorkingProcess />

        <FeedbackSlider />

        <div className="pb-[50px] md:pb-[60px] lg:pb-[140px]">
          <OurLatestBlogPosts />
        </div>

      </div>
    </>
  );
}

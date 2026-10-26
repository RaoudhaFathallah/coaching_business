import TopHeaderTwo from "@/components/Layout/TopHeaderTwo";
import NavbarThree from "@/components/Layout/NavbarThree";
import HeroBanner from "@/components/LifeCoach/HeroBanner";
import AboutMe from "@/components/LifeCoach/AboutMe";
import Services from "@/components/LifeCoach/Services";
import WorkingProcess from "@/components/Common/WorkingProcess";
import PopularCourses from "@/components/LifeCoach/PopularCourses";
import NewBranding from "@/components/LifeCoach/NewBranding";
import FeedbackSliderThree from "@/components/Common/FeedbackSliderThree";
import Cta from "@/components/LifeCoach/Cta";
import OurLatestBlogPosts from "@/components/Common/OurLatestBlogPosts";
import NewsletterBoxThree from "@/components/Common/NewsletterBoxThree";
import FooterThree from "@/components/Layout/FooterThree";

export default function LifeCoachHome() {
  return (
    <>
      <div className="bg-[#ffff]">
        <Cta />

        <AboutMe />

        <Services />

        <WorkingProcess />

        <PopularCourses />

        <NewBranding />

        <FeedbackSliderThree />


        <div className="py-[50px] md:py-[60px] lg:py-[140px]">
          <OurLatestBlogPosts />
        </div>


      </div>
    </>
  )
}

import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";
import Trainer from "@/components/HealthCoach/Trainer";
import HealthCoachDietPlan from "@/components/HealthCoach/HealthCoachDietPlan";
import PromoVideo from "@/components/Common/PromoVideo";
import FeedbackSlider from "@/components/Common/FeedbackSlider";
import Cta from "@/components/LifeCoach/Cta";
import Partner from "@/components/Common/Partner";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="Privacy Policy"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <PrivacyPolicyContent />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer"; 
import Settings from "@/components/Instructor/Settings";

export default function InstructorSettingsPage() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="Instructor settings"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <Settings />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

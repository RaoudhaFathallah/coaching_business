import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";  
import MyCourses from "@/components/Student/MyCourses";

export default function StudentMyCoursesPage() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="My courses"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]"> 
        <MyCourses />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

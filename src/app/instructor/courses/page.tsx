import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer"; 
import Courses from "@/components/Instructor/Courses";

export default function InstructorCoursesPage() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="Instructor courses"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <Courses />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

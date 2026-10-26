import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";
import BlogList2Column from "@/components/Blog/BlogList2Column";

export default function Blog2Page() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="Our blogs 02"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <BlogList2Column />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

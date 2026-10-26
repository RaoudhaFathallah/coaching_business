import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Partner from "@/components/Common/Partner";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";
import EventsList from "@/components/Events/EventsList";

export default function EventsPage() {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBannerTitle
        title="All Events"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <EventsList />

        <Partner />

        <NewsletterBox />
      </div>

      <Footer />
    </>
  );
}

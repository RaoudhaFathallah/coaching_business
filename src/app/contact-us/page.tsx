import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import NewsletterBox from "@/components/Common/NewsletterBox";
import Footer from "@/components/Layout/Footer";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import ContactForm from "@/components/ContactUs/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      

      <PageBannerTitle
        title="Contact us"
        homeText="Home"
        homeUrl="/"
        image="/images/page-banner1.jpg"
        image2="/images/page-banner2.jpg"
        image3="/images/page-banner3.jpg"
      />

      <div className="bg-[#ffff]">
        <ContactInfo />

        <ContactForm />

      </div>

    </>
  );
}

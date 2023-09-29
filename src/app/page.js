import NavigationBar from "@/components/NavigationBar";
import Banner from "./_homeComponents/Banner";
import Footer from "@/components/Footer";
import AllClasses from "./_homeComponents/AllClasses";
import InstructorSection from "./_homeComponents/InstructorSection";
import ContactUsSection from "./_homeComponents/ContactUsSection";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <div className=" px-10 md:p0">
          <AllClasses />
          <InstructorSection />
        </div>
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;

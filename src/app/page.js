import NavigationBar from "@/components/NavigationBar";
import Banner from "./_homeComponents/Banner";
import Footer from "@/components/Footer";
import AllClasses from "./_homeComponents/AllClasses";
import InstructorSection from "./_homeComponents/InstructorSection";

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <Banner />
      <AllClasses />
      <InstructorSection />
      <Footer />
    </main>
  );
};

export default Home;

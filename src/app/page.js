import NavigationBar from "@/components/NavigationBar";
import Banner from "./_homeComponents/Banner";
import Footer from "@/components/Footer";
import AllClasses from "./_homeComponents/AllClasses";

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <Banner />
      <AllClasses />
      home page
      <Footer />
    </main>
  );
};

export default Home;

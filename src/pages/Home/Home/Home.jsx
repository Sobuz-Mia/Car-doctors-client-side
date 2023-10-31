import Footer from "../../Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
          <Banner/>
          <About/>
          <Services/>
          <Products/>
          <Footer/>
        </div>
    );
};

export default Home;
import "css/app.css";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Subreddits from "features/subreddits/Subreddits";
import BackToTop from "components/BackToTop";
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside>
        <Subreddits />
      </aside>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

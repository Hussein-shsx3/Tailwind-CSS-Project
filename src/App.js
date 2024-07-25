import React from "react";
import Header from "./Components/header";
import Home from "./Components/home";
import Features from "./Components/features";
import Team from "./Components/team";
import SignIn from "./Components/signIn";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div className="bg-mainColor items-center">
      <Header />
      <Home />
      <Features />
      <Team />
      <SignIn />
      <Footer />
    </div>
  );
};

export default App;

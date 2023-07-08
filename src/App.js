import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Error from "./Error";
import Personal from "./Personal";
import UserDetails from "./UserDetails";
import { Public } from "./Public";
import Users from "./Users";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
    <Route path=":userId" element={<UserDetails />} />
</Route>
        <Route path="/About" element={<About />} >
          <Route index element={<Personal/>} /> 
          {/* "index" is to load as default. */}  
          <Route path="Personal" element={<Personal/>} />
          <Route path="Public" element={<Public/>} />
        </Route>
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/Missing" element={<Missing />} />
        <Route path="/PostPage" element={<PostPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

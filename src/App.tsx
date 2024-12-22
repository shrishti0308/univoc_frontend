import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Benefits from "./components/Benefits";
import ContactForm from "./components/ContactForm";
import JobRolesAndCourses from "./components/JobRolesAndCourses";
import data from "./data/data.json";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-roboto bg-[#C7D3E8]">
      <Header hero={data.hero} />
      <main className="container flex flex-col items-center mx-auto px-4 mt-8">
        <About
          {...data.about}
          programDetails={data.programDetails}
          courses={data.courses}
        />
        <Benefits benefits={data.benefits} />
        <JobRolesAndCourses
          jobRoles={data.jobRoles}
          relatedCourses={data.relatedCourses}
        />
        <ContactForm />
      </main>
      <Footer/>
    </div>
  );
};

export default App;

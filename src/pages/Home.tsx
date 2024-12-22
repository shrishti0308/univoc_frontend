import React, { useEffect, useState } from "react";
import About from "../components/About";
import Benefits from "../components/Benefits";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JobRolesAndCourses from "../components/JobRolesAndCourses";
import axios from "../utils/axiosInstance";

type CourseData = {
  hero: any;
  about: any;
  programDetails: any;
  courses: any[];
  benefits: any;
  jobRoles: string[];
  relatedCourses: Array<{ title: string; rating: number; image: string }>;
};

const Home: React.FC = () => {
  const [data, setData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('/courses');
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data", error);
        setError("Failed to load course data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-2xl">Loading...</p>
        </div>
      ) : error ? (
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-2xl text-red-500">{error}</p>
        </div>
      ) : (
        <div className="min-h-screen font-roboto bg-[#C7D3E8]">
          <Header hero={data?.hero} />
          <main className="container flex flex-col items-center mx-auto px-4 mt-8">
            <About
              {...data?.about}
              programDetails={data?.programDetails}
              courses={data?.courses}
            />
            <Benefits benefits={data?.benefits} />
            <JobRolesAndCourses
              jobRoles={data?.jobRoles || []}
              relatedCourses={data?.relatedCourses || []}
            />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
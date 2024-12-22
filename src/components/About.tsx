import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Card, CardContent } from "@/components/ui/card";
  import React from "react";
  import { Button } from "./ui/button";
  
  interface AboutProps {
    title: string;
    description: string;
    programDetails: Array<{ label: string; value: string }>;
    courses: Array<{ title: string; content: string }>;
  }
  
  const About: React.FC<AboutProps> = ({
    title,
    description,
    programDetails,
    courses,
  }) => {
    return (
      <section className="mb-12">
        <h1 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 p-2">
          {title}
        </h1>
  
        <div className="flex gap-4 flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-4 lg:gap-12 w-fit">
            <p className="text-muted-foreground leading-relaxed">{description}</p>
  
            <div className="rounded-lg p-10 bg-transparent border border-gray-400">
              <h2 className="text-4xl font-medium mb-6 border-b-2 border-b-gray-500">
                Courses
              </h2>
              <Accordion
                type="single"
                collapsible
                className="space-y-4 font-light"
              >
                {courses.map((course, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-slate-50/80 rounded-xl"
                  >
                    <AccordionTrigger className="text-xl px-4">
                      {course.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base px-4">
                      {course.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
  
          <Card className="w-full max-w-sm bg-white rounded-3xl p-3 shadow-2xl shadow-blue-500/40">
            <div className="w-full overflow-hidden rounded-t-lg">
              <img
                src="/images/program.png"
                alt="Program preview"
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 flex flex-col items-center">
              <Button className="w-fit mb-6 p-6 px-8 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 hover:bg-gradient-to-r hover:from-10% hover:via-50% hover:to-90% hover:from-blue-500 hover:via-blue-300 hover:to-blue-500 text-white text-2xl font-normal rounded-2xl">
                Start Learning
              </Button>
              <div className="space-y-4 w-full font-light">
                {programDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-300 text-xl"
                  >
                    <span className="text-gray-700">{detail.label}</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  };
  
  export default About;
  
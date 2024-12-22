import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Rating from "./Rating";

interface JobRolesAndCoursesProps {
  jobRoles: string[];
  relatedCourses: Array<{ title: string; rating: number; image: string }>;
}

const JobRolesAndCourses: React.FC<JobRolesAndCoursesProps> = ({
  jobRoles,
  relatedCourses,
}) => {
  return (
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h2 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 p-2">
          Job Roles
        </h2>
        <div className="flex flex-wrap gap-2">
          {jobRoles.map((role, index) => (
            <Badge key={index} variant="default" className="text-lg py-2 px-4">
              {role}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 p-2">
          Related Courses
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {relatedCourses.map((course, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-transparent flex flex-col lg:flex-row border-none"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-[180px] object-cover rounded-s-xl"
              />

              <div>
                <CardHeader>
                  <CardTitle className="font-normal text-2xl">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Rating rating={course.rating} />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobRolesAndCourses;

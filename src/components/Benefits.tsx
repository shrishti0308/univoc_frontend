"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface BenefitCards {
  image: string;
  title: string;
  description: string;
}

const Benefits: React.FC<{ benefits: BenefitCards[] }> = ({ benefits }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 text-center p-2">Benefits</h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          startIndex: activeIndex,
        }}
        className="w-full"
        setApi={(api) => {
          api?.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {benefits.map((benefit, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3"
            >
              <Card
                className={cn(
                  "relative rounded-xl overflow-hidden transition-all duration-300 md:h-[350px] lg:h-[400px] select-none",
                  activeIndex === index
                    ? "scale-100 blur-0 brightness-100"
                    : "scale-95 blur-[2px] brightness-90"
                )}
              >
                <div className="p-4 lg:p-6 h-full flex flex-col items-start bg-gradient-to-br from-blue-500 via-35% via-blue-300 to-blue-500 text-white">
                  <div className="w-24 md:w-20 h-24 md:h-20 mb-4">
                    <img
                      src={benefit.image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-3xl md:text-xl mb-4  font-medium">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-xs lg:text-sm leading-relaxed  font-normal">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Benefits;

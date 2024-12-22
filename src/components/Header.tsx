import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Input } from "@/components/ui/input";
  import {
    ChevronDown,
    ChevronRight,
    Navigation,
    SearchIcon,
  } from "lucide-react";
  import React, { useState } from "react";
  import { headerData } from "../data/headerConstant";
  import Rating from "./Rating";
  
  interface item {
    title: string;
    link: string;
  }
  
  interface NavbarComponent {
    title: string;
    items: item[];
  }
  
  interface HeroProps {
    title: string;
    breadcrumbs: string[];
    rating: number;
  }
  
  interface HeaderProps {
    hero: HeroProps;
  }
  
  const Header: React.FC<HeaderProps> = ({ hero }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="bg-white shadow-md max-w-[90%] mx-auto border-2 border-blue-400 rounded-t-xl rounded-b-[6rem] overflow-hidden">
        <div className="mx-auto px-4 py-4 bg-gradient-to-r from-blue-200">
          <div className="flex justify-between items-center">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              width={180}
              height={180}
            />
  
            <div className="hidden lg:flex lg:items-center gap-8">
              <nav className="flex items-center justify-start space-x-4">
                {headerData.navbar.map((item: NavbarComponent, index: number) => (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-blue-600 transition-colors border p-1 px-4 rounded-full drop-shadow-lg">
                      {item.title} <ChevronDown className="ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items.map((text: item, index: number) => (
                        <DropdownMenuItem key={index}>
                          <a href={text.link}>{text.title}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </nav>
  
              <div className="flex items-center justify-between border rounded-xl px-2">
                <div className="flex items-center">
                  <SearchIcon className="text-gray-600" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full border-none"
                  />
                </div>
                <Navigation className="text-gray-600" />
              </div>
            </div>
  
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="rounded-full border-2 border-blue-400 hover:text-white hover:bg-gradient-to-r from-blue-700 to-sky-400 transition-all duration-300"
              >
                Sign in
              </Button>
              <Button
                variant="default"
                className="rounded-full bg-gradient-to-r from-blue-700 to-sky-400"
              >
                Register for free
              </Button>
            </div>
  
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="mt-4 lg:hidden">
              <nav className="flex flex-col space-y-2">
                {headerData.navbar.map((item: NavbarComponent, index: number) => (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="font-normal text-lg">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="font-normal text-sm">
                        <nav className="flex flex-col space-y-2">
                          {item.items.map((text: item, index: number) => (
                            <a key={index} href={text.link}>
                              {text.title}
                            </a>
                          ))}
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </nav>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between border rounded-xl px-2">
                  <div className="flex items-center">
                    <SearchIcon className="text-gray-600" />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="w-full border-none"
                    />
                  </div>
                  <Navigation className="text-gray-600" />
                </div>
                <Button variant="outline" className="w-full font-normal text-lg rounded-full border-2 border-blue-400 hover:text-white hover:bg-gradient-to-r from-blue-700 to-sky-400 transition-all duration-300">
                  Sign in
                </Button>
                <Button className="w-full font-normal text-lg rounded-full bg-gradient-to-r from-blue-700 to-sky-400">
                  Register for free
                </Button>
              </div>
            </div>
          )}
        </div>
        <Hero {...hero} />
      </header>
    );
  };
  
  const Hero: React.FC<HeroProps> = ({ title, breadcrumbs, rating }) => {
    return (
      <div className="bg-[url('/images/hero-bg.png')] bg-full relative h-[400px] flex flex-col justify-center pl-8 md:pl-12">
        <div className="absolute right-0 z-0 bg-[url('/images/hero.png')] bg-no-repeat bg-right h-full w-full filter blur-[3px]" />
        <div className="z-10 text-white">
          <nav className="text-sm md:text-base mb-4">
            {breadcrumbs.map((item: string, index: number) => (
              <span key={index}>
                <a href="#" className="hover:text-blue-500">
                  {item}
                </a>
                <ChevronRight className="inline-block mx-2" />
              </span>
            ))}
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">{title}</h1>
          <div className="flex items-center">
            <Rating rating={rating} />
            <span className="ml-4">{rating}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
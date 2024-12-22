import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Twitter,
  } from "lucide-react";
  import React from "react";
  import { footerData } from "../data/footerConstant";
  
  const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Top Section for Logo and Slogan */}
          <div className="flex flex-col items-center lg:items-start gap-3 text-center mb-8">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              width={200}
              height={200}
            />
            <p className="text-sm">{footerData.slogan}</p>
          </div>
  
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                {footerData.aboutus.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="hover:text-blue-400">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Academics</h3>
              <ul className="space-y-2">
                {footerData.academics.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="hover:text-blue-400">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Innovation</h3>
              <ul className="space-y-2">
                {footerData.innovation.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="hover:text-blue-400">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Other Links</h3>
              <ul className="space-y-2">
              {footerData.otherLink.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="hover:text-blue-400">
                  {item.title}
                  </a>
                </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Address and Social Links */}
          <div className="mt-8 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center lg:items-start">
  
              <div className="mb-4 lg:mb-0 text-start text-gray-400 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start gap-10">
                <span className="flex items-top gap-2">
                  <Mail size={18} />
                  <p>{footerData.contactInfo.email}</p>
                </span>
                <span className="flex items-top gap-2">
                  <MapPin size={18} />
                  <address className="whitespace-pre-wrap">
                    {footerData.address}
                  </address>
                </span>
              </div>
  
              <div className="flex space-x-4 lg:my-auto">
                {footerData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-2xl hover:text-blue-400 transition-colors"
                  >
                    {link.platform === "Facebook" && <Facebook size={40} />}
                    {link.platform === "Twitter" && <Twitter size={40} />}
                    {link.platform === "LinkedIn" && <Linkedin size={40} />}
                    {link.platform === "Instagram" && <Instagram size={40} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
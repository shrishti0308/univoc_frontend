import React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    school: "",
    message: "",
  });
  const [error, setError] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    school: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError({
      ...error,
      [e.target.id]: validate(e.target.id, e.target.value),
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      school: value,
    });
    setError({
      ...error,
      school: validate("school", value),
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value,
    });
    setError({
      ...error,
      phone: validate("phone", value),
    });
  };

  const validate = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        if (!value) {
          return "Full name is required";
        } else {
          return "";
        }
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          return "Email is required";
        } else if (!emailRegex.test(value)) {
          return "Invalid email address";
        } else {
          return "";
        }
      case "phone":
        if (!value) {
          return "Phone number is required";
        } else {
          return "";
        }
      case "state":
        if (!value) {
          return "State is required";
        } else {
          return "";
        }
      case "city":
        if (!value) {
          return "City is required";
        } else {
          return "";
        }
      case "school":
        if (!value) {
          return "School is required";
        } else {
          return "";
        }
      case "message":
        if (!value) {
          return "Message is required";
        } else {
          return "";
        }
      default:
        return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate(key, formData[key as keyof typeof formData]);
      if (error) {
        acc[key as keyof typeof formData] = error;
      }
      return acc;
    }, {} as typeof error);

    if (Object.values(formErrors).some((error) => error)) {
      setError(formErrors);
      return;
    }

    // Send form data to server
    console.log(formData);

    // if response is successful, reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      school: "",
      message: "",
    });
  };

  return (
    <div className="w-screen overflow-hidden bg-[url('/images/contact-bg.png')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Section */}
        <div className="text-white space-y-6 max-w-xl p-4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Have More Questions?
          </h1>
          <p className="text-lg opacity-90  text-gray-200">
            Reach out to us. Our support team is to assist you.
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:Hrd@Theunivoc.Com"
                className="hover:underline text-gray-200"
              >
                Hrd@Theunivoc.Com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <a
                href="tel:+918448373884"
                className="hover:underline text-gray-200"
              >
                +91 84483 73884
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                id="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                required
                onChange={handleChange}
              />
            </div>
            {error.fullName && (
              <p className="text-red-500 text-sm">{error.fullName}</p>
            )}
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <div className="w-full drop-shadow-sm">
              <PhoneInput
                id="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                defaultCountry="in"
                required
                onChange={handlePhoneChange}
                containerClassName="w-full"
                inputClassName="w-full"
              />
            </div>
            {error.phone && (
              <p className="text-red-500 text-sm">{error.phone}</p>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  id="state"
                  placeholder="Enter State*"
                  value={formData.state}
                  required
                  onChange={handleChange}
                />
              </div>
              {error.state && (
                <p className="text-red-500 text-sm">{error.state}</p>
              )}
              <div>
                <Input
                  id="city"
                  placeholder="Enter City*"
                  value={formData.city}
                  required
                  onChange={handleChange}
                />
              </div>
              {error.city && (
                <p className="text-red-500 text-sm">{error.city}</p>
              )}
            </div>

            <div>
              <Select
                value={formData.school}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select School Name*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school1">School 1</SelectItem>
                  <SelectItem value="school2">School 2</SelectItem>
                  <SelectItem value="school3">School 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error.school && (
              <p className="text-red-500 text-sm">{error.school}</p>
            )}

            <div>
              <Textarea
                id="message"
                placeholder="Your Message*"
                value={formData.message}
                className="h-24"
                required
                onChange={handleChange}
              />
            </div>
            {error.message && (
              <p className="text-red-500 text-sm">{error.message}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-[#4171E0] hover:bg-[#3461D1]"
            >
              Contact Us
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;

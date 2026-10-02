import React from "react";
import HeadingSection from "@/components/Helper/HeadingSection";
import { Input } from "@/components/ui/input";
import { contactInfo, socialLinksSec } from "@/lib/data";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <div
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gradient-to-b dark:from-[#0a0a1a] dark:to-[#1a1a2e]"
    >
      <HeadingSection
        title_1="Get In"
        title_2="Touch"
        description="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <div className="space-y-8">
              <div>
                <span className="text-2xl font-semibold mb-4">Let’s talk</span>
                <span className="text-muted-foreground">
                  &nbsp;&nbsp;I’m always open to discussing new projects,
                  creative ideas, opportunities or to be part of your vision.
                </span>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  return (
                    <a
                      href={item.href}
                      key={item.label}
                      target="_blank"
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <item.icon className="w-5 h-5 text-blue-500 dark:text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground ">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* social icons */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinksSec.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl hover:scale-120 bg-white dark:bg-gray-900 flex items-center justify-center  hover:text-blue-500 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*  contact form  */}
          <ContactForm />
          {/* <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="250"
          >
            <form className="bg-white dark:bg-gray-900 rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="bg-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="Message"
                  name="Message"
                  placeholder="Your query..."
                  required
                  className="bg-gray-100 h-40"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                size={"lg"}
                className="w-full cursor-pointer"
              >
                <Send className="2-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

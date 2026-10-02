"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      data-aos-delay="250"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-900 rounded-2xl p-8 space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="John Smith"
              className="bg-gray-100"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              placeholder="john@example.com"
              className="bg-gray-100"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="bg-gray-100"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your query..."
            className="bg-gray-100 h-40"
            rows={5}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-2 text-center">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2 text-center">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

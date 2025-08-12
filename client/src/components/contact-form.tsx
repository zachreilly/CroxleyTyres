import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-white shadow-md">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-automotive-gray mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-automotive-blue text-automotive-blue hover:bg-automotive-blue hover:text-white"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-8">
        <h3 className="text-xl font-semibold text-automotive-gray mb-6">Send us a message</h3>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-2"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-2"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="mt-2"
              {...form.register("phone")}
            />
            {form.formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell us about your tyre needs or ask any questions"
              className="mt-2 resize-vertical"
              {...form.register("message")}
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={contactMutation.isPending}
            className="w-full bg-automotive-blue hover:bg-blue-800 text-white px-8 py-4 text-lg"
          >
            {contactMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

import {
  Button,
  Stack,
  Input,
  Textarea,
  Box,
  Heading
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Missing EmailJS environment variables. Check your .env file.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current!.reset();
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box bg="#5dbb63" p={10} borderRadius="md" shadow="lg" w="40%">
      <Heading size="lg" mb={6} color="white">
        Contact Us
      </Heading>
      <form ref={formRef} onSubmit={sendEmail}>
        <Stack gap={4}>
          <Input placeholder="Enter your Name" name="user_name" bg="white" required />
          <Input
            placeholder="Enter a valid email address"
            type="email"
            name="user_email"
            bg="white"
            required
          />
          <Textarea placeholder="Your Message" name="message" bg="white" rows={5} required />
          <Button bg="cyan.600" mt={2} w="fit-content" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ContactForm;

import {
  Button,
  Field,
  Fieldset,
  Stack,
  Input,
  Textarea,
  Box,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_mjvzpwt",     // Your actual service ID
        "template_nk563pb",    // Your actual template ID
        formRef.current,
        "hGoqT-ZTCay5py0mx"    // Your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!");
          formRef.current!.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          toast.error("Failed to send message.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box minH="100vh" py={20} bgSize="cover" bgPosition="center">
      <Center h="100%">
        <Box
          bg="whiteAlpha.900"
          border="1px solid"
          borderColor="black"
          borderRadius="lg"
          p="10px"
          maxW="md"
          w="full"
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <Fieldset.Root size="lg">
              <Stack>
                <Fieldset.Legend>Contact Information</Fieldset.Legend>
                <Fieldset.HelperText>
                  Please submit your contact information below.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content>
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input name="user_name" autoComplete="name" required />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Email address</Field.Label>
                  <Input
                    name="user_email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Message</Field.Label>
                  <Textarea name="message" required />
                </Field.Root>
              </Fieldset.Content>

              <Button
                type="submit"
                isLoading={isSubmitting}
                mt={5}
                alignSelf="flex-start"
              >
                Submit
              </Button>
            </Fieldset.Root>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactForm;

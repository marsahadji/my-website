'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  // Validate data
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real app, you would use a service like Resend, Mailgun, etc.
  console.log('Form submission received:', validatedFields.data);

  return {
    success: true,
    message: "Votre message a été envoyé avec succès. / Your message has been sent successfully.",
  };
}

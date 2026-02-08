'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { sendEmail } from '@/actions/send-email';
import { Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court / Name too short"),
  email: z.string().email("Email invalide / Invalid email"),
  message: z.string().min(10, "Message trop court / Message too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsPending(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error("Une erreur est survenue / An error occurred");
      }
    } catch (error) {
      toast.error("Erreur de connexion / Connection error");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary">
            Nom / Name
          </label>
          <input
            {...register('name')}
            id="name"
            placeholder="Martial Ahadji"
            className="bg-transparent border-b border-border py-3 outline-none focus:border-accent transition-colors font-sans text-lg"
          />
          {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary">
            Email
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="hello@martial.tg"
            className="bg-transparent border-b border-border py-3 outline-none focus:border-accent transition-colors font-sans text-lg"
          />
          {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary">
          Message
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Comment puis-je vous aider ? / How can I help you?"
          className="bg-transparent border-b border-border py-3 outline-none focus:border-accent transition-colors font-sans text-lg resize-none"
        />
        {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
      </div>

      <Button type="submit" disabled={isPending} className="w-full sm:w-auto min-w-[200px] gap-2">
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer / Send
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}

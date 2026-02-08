'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Database, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface WaitlistFormProps {
  ctaText: string;
}

export default function WaitlistForm({ ctaText }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Inscription réussie ! / Successfully joined the waitlist!");
    setEmail('');
    setIsPending(false);
  };

  return (
    <div className="relative p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground overflow-hidden shadow-2xl">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Database className="w-64 h-64 rotate-12" />
      </div>

      <div className="relative z-10 max-w-xl">
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
          Prêt à changer d&apos;échelle ?
        </h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-accent transition-all"
          />
          <Button 
            type="submit" 
            disabled={isPending}
            className="bg-accent text-white hover:bg-accent/90 border-none px-8 py-4 h-auto text-base"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {ctaText}
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
        
        <p className="mt-6 text-xs text-primary-foreground/60 uppercase tracking-widest font-bold">
          Strictement confidentiel. Pas de spam.
        </p>
      </div>
    </div>
  );
}

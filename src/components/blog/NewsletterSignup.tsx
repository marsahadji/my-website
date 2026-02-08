'use client';

import { Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NewsletterSignup() {
  return (
    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        Restez à la pointe de l&apos;architecture
      </h3>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Rejoignez ma newsletter pour recevoir mes dernières analyses techniques et conseils sur la souveraineté numérique.
      </p>
      
      <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="votre@email.com" 
          className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
          required
        />
        <Button variant="primary" className="gap-2">
          S&apos;abonner
          <Send className="w-4 h-4" />
        </Button>
      </form>
      
      <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold">
        Pas de spam. Désinscription en un clic.
      </p>
    </div>
  );
}

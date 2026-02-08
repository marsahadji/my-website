import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MDXContent from '@/components/blog/MDXContent';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import FadeIn from '@/components/animations/fade-in';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.metadata.title} | Martial Ahadji`,
      description: post.metadata.description,
    };
  } catch (e) {
    return {
      title: 'Article non trouvé',
    };
  }
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  let post;
  
  try {
    post = getPostBySlug(params.slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <article className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto mb-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent mb-12 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Retour au blog
              </Link>

              <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.metadata.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-[1.1]">
                {post.metadata.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-12">
                {post.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-primary/5 text-primary border border-primary/10"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <MDXContent source={post.content} />
              
              <div className="mt-20 pt-20 border-t border-border">
                <NewsletterSignup />
              </div>
            </div>
          </FadeIn>
        </article>
      </main>
      <Footer />
    </div>
  );
}

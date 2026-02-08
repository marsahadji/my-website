import { getAllPosts } from '@/lib/blog';
import PostCard from '@/components/blog/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/fade-in';

export const metadata = {
  title: "Blog | Martial Ahadji",
  description: "Analyses techniques, architecture logicielle et réflexions sur la tech en Afrique.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                Le Blog.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Partage d&apos;expérience sur l&apos;architecture logicielle, la data et les enjeux de la souveraineté numérique.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.1}>
                <PostCard post={post} />
              </FadeIn>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Aucun article publié pour le moment.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

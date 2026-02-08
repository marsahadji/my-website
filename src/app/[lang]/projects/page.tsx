import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/fade-in";
import ProjectCard from "@/components/projects/ProjectCard";
import { getDictionary } from "@/lib/get-dictionary";

export default async function ProjectsPage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang as 'en' | 'fr');

  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} />
      <main className="flex-grow py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                {dict.projects.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {dict.projects.intro}
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dict.projects.items.map((project: any, index: number) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                stack={project.stack}
                status={project.status}
                link={project.link}
                statusLabel={project.status === 'Live' ? dict.projects.status_live : dict.projects.status_building}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} />
    </div>
  );
}

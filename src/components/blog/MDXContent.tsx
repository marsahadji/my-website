import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

interface MDXContentProps {
  source: string;
}

const options: any = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          keepBackground: true,
        },
      ],
    ],
  },
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-slate max-w-none 
      prose-headings:font-serif prose-headings:text-primary prose-headings:font-bold
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-accent prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
      prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-[#282c34] prose-pre:p-0 prose-pre:rounded-xl prose-pre:shadow-xl
      ">
      <MDXRemote source={source} options={options} />
    </div>
  );
}

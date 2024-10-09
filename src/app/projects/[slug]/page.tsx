import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import BlockQuote from '@/containers/portfolio-page/mdx/blockquote';
import H1 from '@/containers/portfolio-page/mdx/H1';
import H2 from '@/containers/portfolio-page/mdx/H2';
import HeroImage from '@/containers/portfolio-page/mdx/HeroImage';
import P from '@/containers/portfolio-page/mdx/P';

const POSTS_FOLDER = path.join(process.cwd(), 'public', '_posts');

// Genera los slugs de los posts en tiempo de compilación
export async function generateStaticParams() {
  const filenames = fs.readdirSync(POSTS_FOLDER);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// Renderiza cada página del post de forma estática
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(POSTS_FOLDER, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = await compileMDX({
    source: fileContent,
    components: { h1: H1, h2: H2, p: P, HeroImage, blockquote: BlockQuote },
    options: { parseFrontmatter: true },
  });

  return <>{content}</>;
}

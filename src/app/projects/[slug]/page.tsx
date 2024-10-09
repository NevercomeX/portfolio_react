import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import BlockQuote from '@/containers/portfolio-page/mdx/blockquote';
import H1 from '@/containers/portfolio-page/mdx/H1';
import H2 from '@/containers/portfolio-page/mdx/H2';
import HeroImage from '@/containers/portfolio-page/mdx/HeroImage';
import P from '@/containers/portfolio-page/mdx/P';

// Usar la carpeta public/_posts para asegurar que los archivos estén disponibles
const POSTS_FOLDER = path.join(process.cwd(), 'public', '_posts');

async function getPostFileNames() {
  const filenames = await fs.readdir(POSTS_FOLDER);
  return filenames.map((name) => name.replace(/\.mdx?$/, ''));
}

async function readPostFile(slug: string) {
  const filePath = path.join(POSTS_FOLDER, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading the file for slug: ${slug}`, error);
    return null; // Manejo de errores si no encuentra el archivo
  }
}

// Generar los parámetros estáticos de los slugs de los posts
export async function generateStaticParams() {
  const slugs = await getPostFileNames();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    return { notFound: true }; // Si no encuentra el archivo, devolver 404
  }

  const { content } = await compileMDX<{ title: string }>({
    source: markdown,
    components: {
      h1: H1,
      h2: H2,
      p: P,
      HeroImage,
      blockquote: BlockQuote,
    },
    options: { parseFrontmatter: true },
  });

  return <>{content}</>;
}

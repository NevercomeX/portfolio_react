import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import BlockQuote from '@/containers/portfolio-page/mdx/blockquote';
import H1 from '@/containers/portfolio-page/mdx/H1';
import H2 from '@/containers/portfolio-page/mdx/H2';
import HeroImage from '@/containers/portfolio-page/mdx/HeroImage';
import P from '@/containers/portfolio-page/mdx/P';

const POSTS_FOLDER = path.join(process.cwd(), 'content', 'posts');

// Leer el archivo MDX basado en el slug
async function getPost(slug: string) {
  const filePath = path.join(POSTS_FOLDER, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent); // Extraer frontmatter y contenido

    // Serializar el contenido MDX a un formato que puede ser utilizado en el cliente
    const mdxSource = await serialize(content);

    return {
      frontmatter: data, // Metadata como el título y la fecha
      mdxSource, // Contenido serializado listo para ser renderizado
    };
  } catch (error) {
    return null; // Si no encuentra el archivo, devolver null
  }
}

// Generar las páginas estáticas
export async function generateStaticParams() {
  const files = fs.readdirSync(POSTS_FOLDER);
  const slugs = files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
  return slugs;
}

// Renderizar la página SSR
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound(); // Mostrar 404 si no se encuentra el post
  }

  const { frontmatter, mdxSource } = post;

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRemote
        source={mdxSource} // Asegúrate de que 'source' se está pasando correctamente
        components={{ h1: H1, h2: H2, p: P, HeroImage, blockquote: BlockQuote }}
      />
    </article>
  );
}

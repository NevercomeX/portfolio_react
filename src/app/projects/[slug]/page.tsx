import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import H1 from '@/containers/portfolio-page/mdx/H1';
import { Container } from '@mui/material';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await fs.readFile(
    path.join(process.cwd(), 'src/projects', `${params.slug}.mdx`),
    'utf-8',
  );

  interface Frontmatter {
    title: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      H1,
    },
  });

  return (
    <Container className='mt-10'>
      {/* <h1>{ data.frontmatter.title }</h1> */}
      {data.content}
    </Container>
  );
}

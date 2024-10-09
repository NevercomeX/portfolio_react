import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import ProjectHeader from '@/containers/portfolio-page/mdx/ProjectHeader';
import ProjectContent from '@/containers/portfolio-page/mdx/ProjectContent';
import ProjectSidebar from '@/containers/portfolio-page/mdx/ProjectSidebar';
import Checklist from '@/containers/portfolio-page/mdx/Checklist';
import LoginRequired from '@/containers/portfolio-page/mdx/LoginRequired';
import Container from '@/containers/portfolio-page/mdx/Container';

export default async function ProjectPage({
  params,
}: {
  params: { projectSlug: string };
}) {
  const content = await fs.readFile(
    path.join(process.cwd(), 'src/projects', `${params.projectSlug}.mdx`),
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
      ProjectHeader,
      ProjectContent,
      ProjectSidebar,
      Checklist,
      LoginRequired,
    },
  });

  return (
    <Container className='mt-10'>
      {/* <h1>{ data.frontmatter.title }</h1> */}
      {data.content}
    </Container>
  );
}

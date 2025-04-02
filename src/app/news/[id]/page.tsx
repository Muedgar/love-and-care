import { Metadata } from 'next';
import { SingleArticle } from '@/components';
import { getNewsById } from '@/lib';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>; // 👈 Ensure we handle params as a Promise
};

async function fetchArticle(id: string) {
  'use server';
  return getNewsById(parseInt(id, 10));
}

// ✅ Await `params` inside async functions
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params; // 👈 Await params before accessing its properties
  const article = await fetchArticle(resolvedParams.id);
  return {
    title: article ? article.title : 'Article Not Found',
  };
}

// ✅ Await `params` inside the page component
export default async function Page({ params }: PageProps) {
  const resolvedParams = await params; // 👈 Await params before using it
  console.log("Params:", resolvedParams); // Debugging

  const article = await fetchArticle(resolvedParams.id);

  if (!article) {
    notFound();
  }

  return <SingleArticle article={article} />;
}

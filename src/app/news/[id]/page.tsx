import { SingleArticle } from '@/components';
import { getNewsById } from '@/lib';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getNewsById(parseInt(params.id));
  
  if (!article) {
    notFound();
  }
  
  return <SingleArticle article={article} />;
}

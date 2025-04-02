'use client';

import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { formatContent, getRelatedArticles } from "@/utils";

export function SingleArticle({ article }) {
  const router = useRouter();

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full bg-white min-h-screen py-10">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <Button 
          variant="ghost" 
          color="gray" 
          className="cursor-pointer flex items-center"
          onClick={() => router.back()}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to News
        </Button>
      </div>
      
      {/* Article hero section */}
      <div className="w-full bg-gray-50 py-12 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-4">
            <div className="flex items-center mr-4">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center mr-4">
              <User size={16} className="mr-1" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-1" />
              <span className="capitalize">{article.category}</span>
            </div>
          </div>
          
          <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Article content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Summary section */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
            <p className="text-lg font-medium text-gray-700">{article.summary}</p>
          </div>
          
          {/* Main content rendered from markdown */}
          <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
        </div>
        
        {/* Share and navigate section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Button variant="classic" color="gold" className="cursor-pointer" onClick={() => router.back()}>
                <ArrowLeft size={16} className="mr-2" />
                Back to News
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" color="gray" className="cursor-pointer">
                Previous Article
              </Button>
              <Button variant="outline" color="gray" className="cursor-pointer">
                Next Article
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related articles section */}
      <div className="w-full bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {getRelatedArticles(article, 3).map((relatedArticle) => (
              <div key={relatedArticle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedArticle.summary}
                  </p>
                  <Link href={`/news/${relatedArticle.id}`}>
                    <Button variant="classic" color="gold" size="1" className="cursor-pointer">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { getNewsArticles } from "@/lib";
import { Button } from "@radix-ui/themes";
import Image from "next/image";

const SingleCard = ({ article }) => {
  return (
    <div className="faceflipbox">
          <div className="flipbox-container">
            <div className="faces">
              <div className="face one">
                <div className="face-content">
                  <div className="face-content-inner">
                    <h2 className="text-lg font-bold">{article.title}</h2>
                    <p className="text-sm">{article.summary || article.description}</p>
                    {article.isPlaceholder ? (
                      <span className="text-amber-600">Coming soon</span>
                    ) : (
                      <a href={`/news/${article.id}`} className="text-blue-500 underline cursor-pointer"><Button className="cursor-pointer" variant="classic" color="gold">
                                                      Read More
                                                    </Button></a>
                    )}
                  </div>
                </div>
              </div>
              <div className="face two">
                <div className="back-image-container">
                  <Image src={article.image} alt={article.title} className="back-image" />
                 
                </div>
              </div>
              <div className="face three"></div>
              <div className="face four"></div>
              <div className="face five"></div>
              <div className="face six"></div>
            </div>
          </div>
        </div>
  )
}

export function News() {
    const news = getNewsArticles();
    
    return (
      <div className="w-full bg-white pt-10 pb-20 z-[10] relative">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest News</h2>
        
        {/* Card container with centered grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-16">
            {news.map((article, index) => (
              <div key={index} className="flex justify-center">
                <SingleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
"use client";

import { TBlog } from "@/utils/Types";
import Image from "next/image";
import DOMPurify from "dompurify";

import Link from "next/link";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const sanitizedContent = DOMPurify.sanitize(blog.blogContent);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700">
  <div className="lg:w-2/5 h-52 lg:h-auto overflow-hidden">
    <Image
      className="w-full h-full  object-fit transition-transform duration-500 hover:scale-105"
      src={blog.image}
      width={500}
      height={500}
      alt={blog.title}
    />
  </div>
  
  <div className="p-6 lg:w-3/5 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-orange-200 dark:bg-orange-200 text-orange-600 dark:text-orange-600 text-xs font-semibold rounded-full">
          {blog.category}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          By {blog.author}
        </span>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
        {blog.title}
      </h1>
      
      <div 
        className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: sanitizedContent.slice(0, 200),
        }}
      />
    </div>
    
    <Link href={`/blogs/${blog._id}`}>
      <span className="inline-flex items-center text-orange-600 dark:text-orange-500 font-medium hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  </div>
</div>
  );
};

export default BlogCard;

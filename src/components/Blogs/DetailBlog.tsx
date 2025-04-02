"use client";
import { TBlog } from "@/utils/Types";
import Image from "next/image";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleBlog } from "@/utils/actions/BlogService";

const DetailBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<TBlog | null>(null);

  useEffect(() => {
    async function getBlog() {
      const blogData = await getSingleBlog(blogId as string);
      setBlog(blogData);
    }

    getBlog();
  }, [blogId]);

  const sanitizedContent = DOMPurify.sanitize(blog?.blogContent || "");
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
  {/* Blog Header */}
  <div className="mb-10 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
      {blog?.title}
    </h1>
    
    {/* Author and Category */}
    <div className="flex justify-center gap-6 text-sm md:text-base">
      <span className="flex items-center text-gray-600 dark:text-gray-400">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        {blog?.author}
      </span>
      <span className="flex items-center text-gray-600 dark:text-gray-400">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        {blog?.category}
      </span>
    </div>
  </div>

  {/* Featured Image */}
  <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
    <Image
      className="w-full h-auto object-cover"
      src={blog?.image || "https://i.ibb.co.com/WNbVGhL4/how-to-set-default-blog-page.jpg"}
      alt="blogImage"
      width={1200}
      height={630}
      priority
    />
  </div>

  {/* Content */}
  <article className="prose prose-lg dark:prose-invert max-w-none mx-auto">
    <div 
      className="text-gray-700 dark:text-gray-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  </article>

  {/* Footer Separator */}
  <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
    <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
      Thanks for reading!
    </p>
  </div>
</div>
  );
};

export default DetailBlog;

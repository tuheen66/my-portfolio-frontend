"use client";

import { getAllBlogs } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await getAllBlogs();
      setBlogs(result);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase">
          my <span className="text-orange-600">blogs</span>
        </h2>
      <div className="grid grid-cols-1 gap-12 my-12">
        {blogs.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

"use client";

import { getAllBlogs } from "@/utils/actions/BlogService";
import { TBlog } from "@/utils/Types";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Slide } from "react-awesome-reveal";

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
    <div className="px-[5%] ">
      <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase">
        my <span className="text-orange-600">blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 my-12">
        <Slide>
          {blogs?.slice(0,4).map((blog: TBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Blogs;

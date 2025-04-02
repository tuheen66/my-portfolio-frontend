/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
    const blogs = await res.json();

    return blogs.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`);
  const blogs = await res.json();
  return blogs.data;
};

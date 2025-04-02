/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`);
    const response = await res.json();

    if (!res.ok) {
      throw new Error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
    }

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleProject = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`
  );
  const project = await res.json();
  return project.data
};

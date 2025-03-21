/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

import { postMessage } from "@/utils/actions/MessageService";
import { IFormInput } from "@/utils/Types";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

const Contacts = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const res = await postMessage(data);
      console.log(res);
      if (res.insertedId) {
        Swal.fire("Message posted successfully !!!");
        reset();
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <section className=" rounded-xl  mx-auto ">
      <h2 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-slate-600 dark:text-white  text-center uppercase">
        contact <span className="text-orange-600">me</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className=" space-y-4 p-4 lg:flex-1">
          <h2 className="text-2xl font-semibold  text-gray-800 dark:text-white">
            Monirul Hassan
          </h2>
          <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
            <FaHome />
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
            <FaPhone />
            <p>+880 1711591602</p>
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
            <FaWhatsapp />
            <p> +880 1711591602</p>
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
            <MdOutlineEmail />
            <p> hassan.monirul@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-white">
            <FaGithub />
            <p> https://github.com/tuheen66</p>
          </div>
        </div>

        <div className=" flex lg:flex-1 justify-center items-center h-[500px] md:w-[80%]   mx-2 md:mx-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-slate-400 dark:bg-slate-700 text-black dark:text-white p-6 rounded-lg"
          >
            <div className="space-y-2 mx-auto ">
              <div className="col-span-full sm:col-span-3 space-y-2">
                <label htmlFor="name" className="  ">
                  Your name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>

              <div className="col-span-full sm:col-span-3 space-y-2">
                <label htmlFor="email" className=" ">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>
              <div className="col-span-full space-y-2">
                <label htmlFor="textarea" className=" ">
                  Write to me
                </label>
                <textarea
                  {...register("message")}
                  id="textarea"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                />
              </div>
              <button className="bg-orange-600 text-white px-4 py-2  flex items-center gap-4 rounded-lg ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

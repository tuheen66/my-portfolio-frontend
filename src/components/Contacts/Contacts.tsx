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
    <section id="contact" className=" mx-auto px-[5%] pb-12 md:pb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white mb-3">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Contact Info */}
        <div className="lg:w-2/5 bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-orange-400">
                <FaHome className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-orange-400">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-300">+880 1711591602</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-orange-400">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <p className="text-gray-300">+880 1711591602</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-orange-400">
                <MdOutlineEmail className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-300">hassan.monirul@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-orange-400">
                <FaGithub className="text-xl" />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <p className="text-gray-300">github.com/tuheen66</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="font-medium mb-3">Available 24/7</h4>
            <p className="text-gray-300 text-sm">
              Feel free to contact me anytime. Ill get back to you as soon as
              possible.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-3/5 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition"
                placeholder="Hello, I would like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

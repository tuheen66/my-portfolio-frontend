import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;

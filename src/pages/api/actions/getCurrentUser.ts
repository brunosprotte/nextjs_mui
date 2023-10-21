// import prisma from "@/app/libs/prismadb";

import { NextApiResponse } from "next";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email as string,
    //   },
    // });

    // if (!currentUser) {
    //   return null;
    // }

    // return currentUser;
    return session.user
  } catch (err) {
    return null;
  }
};

export default getCurrentUser;

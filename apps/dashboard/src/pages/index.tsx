import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import perms from "../utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import GuildContainer from "../components/Guild/GuildContainer";
import GuildCard from "../components/Guild/GuildCard";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const index: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <header className="">
        <NavBar />
      </header>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Quisquam necessita vel
            <span className="bg-gradient-to-r from-pink-300 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Analog</span>
            delectus
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;

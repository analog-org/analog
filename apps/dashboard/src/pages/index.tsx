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
import Footer from "../components/Footer";

const index: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <header className="">
        <NavBar />
      </header>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-9xl font-bold leading-none sm:text-5xl">
            <span className="text-indigo-600 ">Analog</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Analog is a multipurpose open source Discord bot written in
            Typescript with DiscordJS. It is currently in development.
          </p>
          <div className="flex flex-wrap justify-center">
            <a href="https://discord.gg/XsXC3pAhBY">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded-full dark:bg-indigo-600 hover:dark:bg-indigo-600 dark:text-white">
                Discord
              </button>
            </a>

            <a href="https://github.com/analog-org">
              <button className="px-8 py-3 m-2 text-lg border rounded-full dark:text-gray-50 hover:dark:bg-indigo-600 dark:gradient-to-bl from-pink-300 to-indigo-600">
                Github
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="h-96 bg-gray-800 text-gray-100"></div>
      <Footer />
    </div>
  );
};

export default index;

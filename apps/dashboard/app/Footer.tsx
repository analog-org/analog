"use client"

import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer } from "flowbite-react";
import { authOptions } from "../src/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  return (
    <div>
      <Footer container={true} className="rounded-none">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="https://github.com/analog-org"
                src="https://media.discordapp.net/attachments/1037032323276877945/1065094779509166081/Analog.png?width=850&height=850"
                alt="Flowbite Logo"
                name="Analog"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://github.com/analog-org">
                    Github
                  </Footer.Link>
                  <Footer.Link href="https://discord.gg/XsXC3pAhBY">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
        </div>
      </Footer>
    </div>
  );
};

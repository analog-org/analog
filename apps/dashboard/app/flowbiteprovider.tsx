"use client";

import { Flowbite } from "flowbite-react";
import { customtheme as theme } from "../app/theme";


export default function Provider({ children }) {
  return <Flowbite theme={{ theme }}>{children}</Flowbite>;
}
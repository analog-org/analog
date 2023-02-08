import Provider from "./provider";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import FlowbiteProvider from "./flowbiteprovider";
import { customtheme as theme } from "../app/theme";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FlowbiteProvider>
          <Provider>{children}</Provider>
        </FlowbiteProvider>
      </body>
    </html>
  );
}

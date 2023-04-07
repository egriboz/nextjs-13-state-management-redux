import "@/styles.css";

import { Header } from "@/components/header";
import { Rubik } from "next/font/google";
import { store } from "@/stores";

const BodyFont = Rubik({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  console.log("store***************")
  console.log("store", store.getState())
  return (
    <html>
      <body className={BodyFont.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

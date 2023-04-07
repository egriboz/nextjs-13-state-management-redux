import "@/styles.css";
import { StoreProvider } from "@/stores/storeProvider";
import { store } from "@/stores";
import { Header } from "@/components/header";
import { fetchUser } from "@/stores/user-store";
import { Rubik } from "next/font/google";

const BodyFont = Rubik({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {

  await store.dispatch(fetchUser())

  return (
    <html>
      <body className={BodyFont.className}>
        <StoreProvider>
          <Header />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}

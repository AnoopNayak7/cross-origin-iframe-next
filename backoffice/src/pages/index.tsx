import Image from "next/image";
import { Montserrat } from "next/font/google";
import LoginPage from "./login";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginPage />
    </main>
  );
}

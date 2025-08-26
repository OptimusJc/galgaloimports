import type { ReactNode } from "react";
import { Navbar1 } from "./Navbar1";
import { Footer3 } from "./Footer3";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar1 />
      <main>{children}</main>
      <Footer3 />
    </>
  );
}

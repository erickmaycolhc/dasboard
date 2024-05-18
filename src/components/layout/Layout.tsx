"use.client";
import { useSession } from "next-auth/react";
import SideMenu from "../sideMenu/SideMenu";
import css from "./Layout.module.css";

const Layout = (props: any) => {
  const { data: session } = useSession();
  console.log("session => ", { session });

  return (
    <>
      <main className={css.layout}>
        {session && <SideMenu />}
        {props.children}
      </main>
    </>
  );
};

export default Layout;

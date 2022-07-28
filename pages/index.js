import Head from "next/head";
import Image from "next/image";
import Layouts from "../Layouts/Layouts";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layouts>
        <div className="head_title">
          <Image
            src={
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
            width={272}
            height={92}
          />
        </div>
      </Layouts>
    </>
  );
}

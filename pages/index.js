import Head from "next/head";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className="head_title">
        <Image
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          width={272}
          height={92}
        />
        {/* <h1>
          {" "}
          <span>A</span>
          <span>r</span>
          <span>s</span>
          <span>h</span>
          <span>a</span>
          <span>d</span>{" "}
        </h1> */}
      </div>
      <div className="input_section">
        <div className="inp_field">
          <input type="text" name="" id="" />
          <div className="Search_icon">
            <HiOutlineSearch />
          </div>
          <div className="google_mic">
            <Image src={"/assets/img/Google_mic.png"} width={14} height={19} />
          </div>
        </div>
      </div>
      <div className="search_btn">
        <input type={"submit"} value="Google Search" />
        <input type={"submit"} value="I'm Feeling Lucky" />
      </div>
    </>
  );
}

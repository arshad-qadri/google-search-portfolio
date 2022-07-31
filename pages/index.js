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
      <div>
        <div        >
          <div className="languages">
            <span> Google offered in:</span>
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCA4">
              हिन्दी
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCA8">
              বাংলা
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBA">
              తెలుగు
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBE">
              मराठी
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBI">
              தமிழ்
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBM">
              ગુજરાતી
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBQ">
              ಕನ್ನಡ
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBU">
              മലയാളം
            </a>{" "}
            <a href="https://www.google.com/setprefs?sig=0_tSHnQEhhAAfM-vtXnbDhToGu6Z8%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiirvj0laP5AhVJat4KHcGTCusQ2ZgBCBY">
              ਪੰਜਾਬੀ
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

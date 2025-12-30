import Link from "next/link";
// import Image from "next/image";

export default function Header() {
  return (
    <header>
      {/* <div className="div1">
                <Image src={"/logo.png"} width={65} height={65} alt="logo"/>

      </div> */}
      <div className="div2">
        <Link href={"/"}>
          <div className="">Home</div>
        </Link>
        <Link href={"resume/"}>
          <div className="">Resume</div>
        </Link>
        <Link href={"formations/"}>
          <div className="">Formations</div>
        </Link>
        <Link href={"experience/"}>
          <div className="">Experience</div>
        </Link>
        <Link href={"projects/"}>
          <div className="">Projects</div>
        </Link>
        <Link href={"contact/"}>
          <div className="">Contact</div>
        </Link>
      </div>
    </header>
  );
}

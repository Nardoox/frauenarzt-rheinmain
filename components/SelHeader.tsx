"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "@/images/arzt-logo.jpg";
import "@/app/styles/style.css"


export default function SelHeader() {
  return (
    <>
      <header className="sel-header">
        <Image src={logo} alt="logo"></Image>
        <ul>
          <Link href={"/seligenstadt/home"}>Home</Link>
          <Link href={"/seligenstadt/home#desc"}>Leistungen</Link>
          <Link href={"/seligenstadt/home#about"}>Über uns</Link>
          <Link href={"/seligenstadt/contact"}>Anfrage</Link>
          <Link href={"/"}>Anfahrt</Link>
          <button onClick={() => scrollToElement(1)}></button>
        </ul>
      </header>
      {/* <div className="header-placeholder"></div> */}
    </>
  )
}
import SelHeader from "@/components/SelHeader";
import placeholder from "@/images/placeholder.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import RezeptForm from "@/components/rezeptForm";

export default function page() {
  return (
    <>
      <div className="header-placeholder"></div>
      <SelHeader></SelHeader>
      <RezeptForm></RezeptForm>
      <Footer></Footer>
    </>
  )
}
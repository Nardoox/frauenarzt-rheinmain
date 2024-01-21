"use client";
import React, { useState, useRef, useEffect } from "react";
import SelHeader from "@/components/SelHeader";
import placeholder from "@/images/placeholder.png";
import background from "@/images/arzt.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import {
  Card,
  CardHeader,
  CardBody,
  useDisclosure,
  CardFooter,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { Tabs, Tab } from "@nextui-org/tabs";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import RezeptForm from "@/components/rezeptForm";
import TerminForm from "@/components/terminForm";
import Accordiont from "@/components/accordion";

import logo from "../../../images/arzt-logo.jpg";
import radew from "../../../images/eduard_radew.jpg";
import bienia from "../../../images/gabriele_bienia-1.jpg";
import uvarov from "../../../images/irina_uvarov-1.jpg";
import team1 from "../../../images/team1.JPG";
import team2 from "../../../images/team2.JPG";
import praxis1 from "../../../images/praxis1.JPG";
import praxis2 from "../../../images/praxis2.JPG";
import praxis3 from "../../../images/praxis3.JPG";
import praxis4 from "../../../images/praxis4.JPG";

export default function Page() {
  const [openModal, setOpenModal] = useState(null);
  const arztRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const praxisRef = useRef<HTMLDivElement>(null)
  const anfrageRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const elementRefs = [
    anfrageRef,
    aboutRef,
    arztRef,
    teamRef,
    praxisRef
  ]

  const scrollToElement = (index: number) => {
    const ref = elementRefs[index];
    if (ref && ref.current) {
      const position = ref.current.offsetTop;
      const offset = 100;
      window.scrollTo({
        top: position - offset,
        behavior: 'smooth',
      });
    }
  };



  const openModalHandler = (modalName: any) => {
    setOpenModal(modalName);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  return (
    <>
      <header className="sel-header">
        <ul>
          <a onClick={() => scrollToElement(1)}>Home</a>
          <a onClick={() => scrollToElement(1)}>Leistungen</a>
          <a onClick={() => scrollToElement(0)}>Anfrage</a>
          <a onClick={() => scrollToElement(1)}>Über uns</a>
          <a onClick={() => scrollToElement(1)}>Anfahrt</a>
        </ul>
      </header>
      <section className="con-wrap">
        {/* <div className="hero-section">
          <Image src={background} alt="alt"></Image>
          <h2>Leistungen</h2>
          <nav className="button__nav">
            <Button color="primary" variant="ghost">
              <Link href={"/"}>Geburtshilfe</Link>
            </Button>
            <Button color="primary" variant="ghost">
              <Link href={"/"}>Gynäkologie</Link>
            </Button>
            <Button color="primary" variant="ghost">
              <Link href={"/"}>operative Therapie</Link>
            </Button>
          </nav>
        </div> */}
        <Accordiont />
        <section ref={anfrageRef} className="rezeptForm">
          <Tabs className="form-type-select" aria-label="Options">
            <Tab
              key="termin"
              title="Terminanfrage"
              className="tab"
            >
              <Card className="forms">
                <CardBody>
                  <TerminForm></TerminForm>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Rezept" title="Rezeptanfrage" className="tab">
              <Card className="forms">
                <CardBody>
                  <RezeptForm></RezeptForm>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </section>
        <section ref={aboutRef} className="about-us">
          <h2>Über uns</h2>
          <nav className="button__nav">
            <Button onClick={() => scrollToElement(2)} color="primary" variant="ghost">
              Ärzte
            </Button>

            <Button onClick={() => scrollToElement(3)} color="primary" variant="ghost">
              Team
            </Button>

            <Button onClick={() => scrollToElement(4)} color="primary" variant="ghost">
              Praxis
            </Button>
          </nav>
          <section ref={arztRef} className="about-doc">
            <h3>Die Ärzte</h3>
            <div className="doc-con-sec">
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2 doc-con-img">
                  <Image
                    alt="Card background"
                    className="rounded-xl"
                    src={radew}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start doc-con-txt">
                  <p className="text-tiny uppercase font-bold">Eduard Radew</p>
                  <small className="text-default-500">
                    Facharzt für Frauenheilkunde und Geburtshilfe
                  </small>
                  <h4
                    onClick={() => openModalHandler("radewLebenslauf")}
                    className="font-bold text-large"
                  >
                    Lebenslauf
                  </h4>
                </CardHeader>
              </Card>
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2 doc-con-img">
                  <Image
                    alt="Card background"
                    className="rounded-xl"
                    src={bienia}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start doc-con-txt">
                  <p className="text-tiny uppercase font-bold">
                    Gabriele Bienia
                  </p>
                  <small className="text-default-500">
                    Fachärztin für Frauenheilkunde und Geburtshilfe
                  </small>
                  <h4
                    onClick={() => openModalHandler("bieniaLebenslauf")}
                    className="font-bold text-large"
                  >
                    Lebenslauf
                  </h4>
                </CardHeader>
              </Card>
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2 doc-con-img">
                  <Image
                    alt="Card background"
                    className="rounded-xl"
                    src={uvarov}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start doc-con-txt">
                  <p className="text-tiny uppercase font-bold">Irina Uvarov</p>
                  <small className="text-default-500">
                    Fachärztin für Frauenheilkunde und Geburtshilfe
                  </small>
                  <h4
                    onClick={() => openModalHandler("uvarovLebenslauf")}
                    className="font-bold text-large"
                  >
                    Lebenslauf
                  </h4>
                </CardHeader>
              </Card>
            </div>
          </section>
          <section ref={teamRef} className="about-team">
            <h3>Team</h3>
            <div className="team-con-div">
              <div className="team-con-wrap">
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none team-card"
                >
                  <Image
                    alt="Woman listing to music"
                    className="object-cover team-card-img"
                    src={team1}
                  />
                  <CardFooter className="card-footer">
                    <p className="team-card-p">Name</p>
                    <p className="team-card-p">Medizinische Fachangestellte</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="team-con-wrap">
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none team-card"
                >
                  <Image
                    alt="Woman listing to music"
                    className="object-cover team-card-img"
                    src={team2}
                  />
                  <CardFooter className="card-footer">
                    <p className="team-card-p">Name</p>
                    <p className="team-card-p">Medizinische Fachangestellte</p>
                  </CardFooter>
                </Card>
              </div>
              {/* <div className="team-con-wrap">
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none team-card"
                >
                  <Image
                    alt="Woman listing to music"
                    className="object-cover team-card-img"
                    src={placeholder}
                  />
                  <CardFooter className="card-footer">
                    <p className="team-card-p">Name</p>
                    <p className="team-card-p">Medizinische Fachangestellte</p>
                  </CardFooter>
                </Card>
              </div> */}
            </div>
          </section>
          <section ref={praxisRef} className="praxis-sec">
            <h3>Praxis</h3>
            <div className="praxis-gallery">
              <div>
                <Image src={praxis2} alt="alt"></Image>
              </div>
              <div>
                <Image src={praxis3} alt="alt"></Image>
              </div>
              <div>
                <Image src={praxis4} alt="alt"></Image>
              </div>
              <div>
                <Image src={praxis1} alt="alt"></Image>
              </div>
              {/* <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div> */}
            </div>
          </section>
        </section>
        <section id="anfahrt" className="anfahrt">
          <h2>Anfahrt</h2>
          <div className="anfahrt-con">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d82180.30763880572!2d8.299077666733885!3d49.93381535964282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47bd999841de3037%3A0xca7b5b9cb9a90cc!2sTreburer%20Str.%2021%2C%2065474%20Bischofsheim!3m2!1d49.9842601!2d8.354155!5e0!3m2!1sde!2sde!4v1698830528713!5m2!1sde!2sde"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                className="gmap"
              ></iframe>
            </div>
            <div className="weg-beschreibung">
              <h2>U Bahn:</h2>
              <p>
                U-1, U-2, U-3, U-8 <br />
                Haltestelle: Eschenheimer Tor
              </p>
              <h2>Bus:</h2>
              <p>
                Nummer 36 <br />
                Haltestelle: Eschenheimer Tor
              </p>
              <h2>Auto:</h2>
              <p>
                City-Parkhaus, Querstraße <br />
                Parkhause Schiller-Passage, Taubenstraße 11
              </p>
            </div>
          </div>
        </section>
        <Modal
          backdrop="blur"
          size="5xl"
          isOpen={openModal === "radewLebenslauf"}
          placement="top"
          onOpenChange={closeModalHandler}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Infos zu Herr Eduard Radew
                </ModalHeader>
                <Image
                  alt="Card background"
                  className="rounded-xl doc-modal-img"
                  src={radew}
                  width={100}
                />
                <ModalBody className="modalcontent">
                  <p className="doc-info-txt">
                    Facharzt für Frauenheilkunde und Geburtshilfe <br />
                    verheiratet, 2 Töchter <br />
                    <br />
                    1989-1995 &nbsp;&nbsp;Studium Humanmedizin an der
                    Universität in Donetzk <br />
                    1995-1997 &nbsp;&nbsp;Facharztausbildung in Donetzk <br />
                    1998-2001 &nbsp;&nbsp;Facharztausbildung an der
                    Universitätsfrauenklinik in Bonn <br />
                    2001-2002 &nbsp;&nbsp;Facharztausbildung in Marienhospital
                    in Brühl <br />
                    2002-2007 &nbsp;&nbsp;Oberarzt in Marienhospital in Brühl{" "}
                    <br />
                    04/2007 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Niederlassung,
                    Übernahme der Frauenarztpraxis Dr. E. Matthäus in
                    Seligenstadt <br />
                    04/2011 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gründung der
                    Gemeinschaftspraxis mit Erik Ericsohn
                  </p>
                  <h3 className="doc-info-h3">Schwerpunkte</h3>
                  <p className="doc-info-txt">
                    <span></span>Schwangerschafts- sowie Krebsvorsorge
                    <br />
                    <span></span>operative Therapie
                    <br />
                    <span></span>Ultraschlalldiagnostik in der Schwangerschaft
                    (Fehlbildungsausschluss, Ersttrimmester- Screening)
                    <br />
                    <span></span>Fruchtwasserpunktion
                    <br />
                    <span></span>Urogynäkologie
                    <br />
                    <span></span>Hormonspechstunde
                    <br />
                    <span></span>Brustdiagnostik (Ultraschall, Stanzbiopsie)
                    <br />
                  </p>
                  <h3 className="doc-info-h3">Qualifikationen</h3>
                  <p className="doc-info-txt">
                    <span></span>Weiterbildung spezielle operative Gynäkologie
                    <br />
                    <span></span>Fachkunde Mamma- Sonographie
                    <br />
                    <span></span>Fachkunde prägeburtliche genetische Beratung
                    <br />
                    <span></span>Ersttrimester- Screening
                    <br />
                    <span></span>Zulassung weiterführende
                    differential-diagnostische Abklärung der fetalen
                    Entwicklungsstörung (Fehlbildungsdiagnostik)
                    <br />
                    <span></span>Zulassung Doppler- Sonographie des
                    feto-maternalen Gefäßsystems
                    <br />
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          backdrop="blur"
          size="5xl"
          isOpen={openModal === "bieniaLebenslauf"}
          placement="top"
          onOpenChange={closeModalHandler}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Frau Dr. med. Gabriele Bienia
                </ModalHeader>
                <Image
                  alt="Card background"
                  className="rounded-xl doc-modal-img"
                  src={bienia}
                  width={100}
                />
                <ModalBody className="modalcontent">
                  <p className="doc-info-txt">
                    Fachärztin für Frauenheilkunde und Geburtshilfe <br />
                    verheiratet, 2 Söhne <br />
                    <br />
                    1997-2004 Studium Humanmedizin an der Justus- Liebig-
                    Universität Gießen <br />
                    01/2005- 03/2010 Facharztausbildung St. Georg Klinikum
                    Eisenach sowie Klinikum Hanau <br />
                    seit 02/2010 Fachärztin für Gynäkologie und Geburtshilfe{" "}
                    <br />
                    seit 04/2010 Oberärztin, Frauenklinik Klinikum Hanau <br />
                    seit 07/ 2015 Angestellte Ärztin Praxis E. Radew & E.
                    Ericsohn in Teilzeit <br />
                  </p>
                  <h3 className="doc-info-h3">Schwerpunkte</h3>
                  <p className="doc-info-txt">
                    <span></span>Schwangerschafts- sowie Krebsvorsorge
                    <br />
                    <span></span>Hormonspechstunde
                    <br />
                    <span></span>Brustdiagnostik (Ultraschall, Stanzbiopsie)
                    <br />
                    <span></span>Ultraschalldiagnostik
                    <br />
                    <span></span>Teenager Sprechstunde
                    <br />
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          backdrop="blur"
          size="5xl"
          isOpen={openModal === "uvarovLebenslauf"}
          placement="bottom"
          onOpenChange={closeModalHandler}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Infos zu Frau Irina Uvarov
                </ModalHeader>
                <Image
                  alt="Card background"
                  className="rounded-xl doc-modal-img"
                  src={uvarov}
                  width={100}
                />
                <ModalBody className="modalcontent">
                  <p className="doc-info-txt">
                    Fachärztin für Frauenheilkunde und Geburtshilfe <br />
                    verheiratet, 2 Kinder
                    <br />
                    <br />
                    1993-1999 Studium Humanmedizin an der Universität Tiraspol
                    (Moldawien) <br />
                    1999-2000 Facharztausbildung an der Frauenklinik
                    Universität Tiraspol <br />
                    2003-2004 Berufspraktikum in der gynäkologischen Abteilung, GPR Rüsselsheim <br />
                    2004-2005 Facharztausbildung Alice- Hospital<br />
                    2008-2014 Facharztausbildung Marienhospital Darmstadt, Asklepios Klinik Langen,
                    Kreisklinik Groß- Gerau{" "}
                    <br />
                    2014-2015 Fachärztin in der gynäkologischen Abteilung
                    Alice- Hospital Darmstadt <br />
                    Seit 04/2015 Angestellte Ärztin Praxis E. Radew & E.
                    Ericsohn in Teilzeit <br />
                    Ab Januar 2020 Niederlassung in die Praxis I. Uvarov/E. Radew/Dr. G. Bienia
                  </p>
                  <h3 className="doc-info-h3">Schwerpunkte</h3>
                  <p className="doc-info-txt">
                    <span></span>Schwangerschafts- sowie Krebsvorsorge
                    <br />
                    <span></span>Hormonspechstunde
                    <br />
                    <span></span>Brustdiagnostik (Ultraschall, Stanzbiopsie)
                    <br />
                    <span></span>Ultraschalldiagnostik
                    <br />
                    <span></span>Teenager Sprechstunde
                    <br />
                    <span></span>ETS (Nackenfaltenmessung)
                    <br />
                    <span></span>3D und 4D Ultraschall
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
      <Footer />
    </>
  );
}

import SelHeader from "@/components/SelHeader";
// import Frankfurt from "../images/Empfang_Frankfurt.jpg";
// import Seligenstadt from "../images/Empfang_Seligenstadt.jpg";
import Image from "next/image";

import { Card, CardFooter, Button } from "@nextui-org/react";

export default function page() {
  return (
    <>
      <div className="header-placeholder"></div>
      <SelHeader></SelHeader>

      <section className="con-wrap landingSection">
        <h1>Wähle hier eine der beiden Praxen aus</h1>
        <div className="landingSection__praxenChooser">
          <div>
            <h2>Willkommen in der Praxis Seligenstadt</h2>
            <Card isFooterBlurred radius="lg" className="border-none">
              {/* <Image
                alt="Woman listing to music"
                className="object-cover"
                height={250}
                src={Seligenstadt}
              /> */}
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <h2 className="text-tiny text-white/80 underligned">
                  Seligenstadt
                </h2>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="ghost"
                  color="primary"
                  radius="lg"
                  size="sm"
                >
                  Weiter zur Praxis
                </Button>
              </CardFooter>
            </Card>
            <ul>
              <li>Willi-Brehm-Straße 6</li>
              <li>63500 Seligenstadt</li>
              <li>Tel. 06182-27755</li>
              <li>Fax. 06182-27756</li>
            </ul>
          </div>
          <div>
            <h2>Willkommen in der Praxis Frankfurt</h2>
            <Card isFooterBlurred radius="lg" className="border-none">
              {/* <Image
                alt="Woman listing to music"
                className="object-cover"
                height={250}
                src={Frankfurt}
              /> */}
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <h2 className="text-tiny text-white/80 underligned">
                  Frankfurt
                </h2>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="ghost"
                  color="primary"
                  radius="lg"
                  size="sm"
                >
                  Weiter zur Praxis
                </Button>
              </CardFooter>
            </Card>
            <ul>
              <li>Oeder Weg 2</li>
              <li>60318 Frankfurt am Main</li>
              <li>Tel. 069 28 13 88</li>
              <li>Fax. 069 29 19 10</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

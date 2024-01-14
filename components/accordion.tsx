import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Image } from "@nextui-org/image";

const Accordiont = () => {
  return (
    <section className="leistungen">
      <h2>Unsere Leistungen</h2>
      <div className="img-wrap">
        <h1>unsere Leistungen</h1>
      </div>
      <Accordion>
        <AccordionItem key="1" aria-label="Geburtshilfe" title="Geburtshilfe">
          <ul className="leistung-ul">
            <li>
              Schwangerschaftsvorsorge (normale sowie Risikoschwangerschaft)
            </li>
            <li>Ersttrimester- Screening (Nackenfalten- Messung)</li>
            <li>
              Nicht- invasive Pränatal- Diagnostik (Präna- Test, Harmonie- Test
              usw.)
            </li>
            <li>Fruchtwasserpunktion (Amniocentese)</li>
            <li>
              weiterführende Sonographie in der 21.-22. Schwangerschaftswoche
              (Fehlbildungsausschluss, Feindiagnostik)
            </li>
            <li>Doppler- Sonographie</li>
            <li>3D und 4D Ultraschall</li>
            <li>Operative Geburtshilfe (Kaiserschnitt- Entbindung)</li>
          </ul>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Gynäkologie" title="Gynäkologie">
          <ul className="leistung-ul">
            <li>
              Krebsfrüherkennung und Nachsorge- Untersuchungen nach Erkrankung
            </li>
            <li>Inkontinenzbehandlung</li>
            <li>Ultraschalluntersuchung des Beckens sowie der Brust</li>
            <li>Hochgeschwindigkeitsbiopsie der Brust (Stanzbiopsie)</li>
            <li>Diagnostik und Behandlung der Osteoporose</li>
            <li>Psychosomatische Grundversorgung</li>
            <li>Endokrinologische Sprechstunde</li>
            <li>Verhütungsberatung</li>
            <li>Kontrazeption hormonell sowie hormonfrei</li>
            <li>
              Alle Arten der Spiralen inklusive (Kupferkette, Kupferperlenball,
              Sterilisation)
            </li>
            <li>Diagnostik und Behandlung bei unerfülltem Kinderwunsch</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Operative Therapie"
          title="Operative Therapie"
        >
          <h2 className="ot-h2">Stationäre operative Therapie</h2>
          <p className="ot-p">
            Alle Arten der stationären gynäkologischen und geburtshilflichen
            Operationen im Rahmen der belegärztlichen Tätigkeit in der
            Frauenklinik am Ziegelberg Aschaffenburg, im Klinikum Hanau sowie im
            Maingau Krankenhaus in Frankfurt am Main(www.rotkreuzkliniken.de)
            (inklusive minimal- invasive Techniken, abdominale, vaginale
            Gebärmutterentfernung, größere Karzinom-, Beckenrekonstruktion- und
            Inkontinenzeingriffe, Brusteingriffe)
          </p>
          <h2 className="ot-h2">Ambulante operative Operationen</h2>
          <p className="ot-p">
            Alle Arten der ambulanten Operationen in Westend- Klinik in
            Frankfurt am Main (www.westend-clinic.de) sowie im OPZ Aschaffenburg
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Accordiont;

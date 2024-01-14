import { Input } from "@nextui-org/input";
import { SearchIcon } from "./searchicon";
import { TiMinus } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="arztFooter">

    	<div className="foot-div">
        <h3>Anschrift</h3>
        <p>Oeder Weg 2</p>
        <p>60318 Frankfurt am Main</p>
        <p>Tel: 069 28 13 88</p>
        <p>frankfurt@frauenarzt-rheinmain.de</p>
        <p>Fax: 069 29 19 10</p>
      </div>

      <div className="foot-div">
        <h3>Öffnungszeiten</h3>
        <div className="off-wrap">
          <p>Montag</p>
          <p>8 bis 12 & 13 bis 18</p>
        </div>
        <div className="off-wrap">
          <p>Dienst</p>
          <p>8 bis 12 & 15 bis 19</p>
        </div>
        <div className="off-wrap">
          <p>Mittwoch</p>
          <p>8 bis 14</p>
        </div>
        <div className="off-wrap">
          <p>Donnerstag</p>
          <p>8 bis 12 & 13 bis 18</p>
        </div>
        <div className="off-wrap">
          <p>Freitag</p>
          <p>8 bis 14</p>
        </div>
      </div>

      <div className="foot-div">
        <h3>Anderes</h3>
        <p>Impressum</p>
        <p>Datenschutz</p>
      </div>

      {/* <div className="searchBar">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div> */}
    </footer>
  );
};

export default Footer;

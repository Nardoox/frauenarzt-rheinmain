"use client"
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useForm, ValidationError } from '@formspree/react';
import { RadioGroup, Radio } from "@nextui-org/react";
import React from "react";

const TerminForm = () => {

  const [state, handleSubmit] = useForm("xaygzkek");
  if (state.succeeded) {
    return <p className="rezept-success">Ihr Terminanfrage wurde erfolgreich abgeschickt</p>;
  }

  return (
    <>
    <section className="formSection">
      <h1>Terminanfrage</h1>
      <form onSubmit={handleSubmit}>  
        <RadioGroup
        orientation="horizontal"
        className="radio"
        name="patient"
      >
        <Radio value="buenos-aires">Bereits Patient-/in</Radio>
        <Radio value="sydney">Neupatient-/in</Radio>
      </RadioGroup>
        <div className="formSection__group">
          <Input name="Nachname" type="text" label="Name" size="sm" />
          <Input name="Vorname" type="text" label="Vorname" size="sm" />
        </div>
        <Input name="Straße" type="Straße" label="Straße" size="sm" />
        <div className="formSection__group">
          <Input name="PLZ" type="PLZ" label="PLZ" size="sm" />
          <Input name="Ort" type="Ort" label="Ort" size="sm" />
        </div>
        <Input name="Email" type="email" label="Email" size="sm" />
        <Input name="Telefonnummer" type="tel" label="Telefon" size="sm" />
        <Input name="Geburtsdatum" type="date" label="Geburtsdatum" size="lg" placeholder="." />
        <Input name="Krankenkasse" type="krankenkasse" label="Krankenkasse" size="sm"/>
        <Select
        name="behandelnder Artt"
        label="behandelnder Arzt"
        placeholder="Arzt"
        className="arzt-select max-w"
      >
          <SelectItem key="1" value="1">
            Arzt1
          </SelectItem>
          <SelectItem key="2" value="2">
          Arzt2
          </SelectItem>
          <SelectItem key="3" value="3">
            Arzt3
          </SelectItem>
      </Select>
        <Textarea
          name="Nachricht"
          labelPlacement="outside"
          placeholder="Terminwunsch und Anliegen"
        />
        <Button type="submit" color="primary" variant="ghost">
          Abschicken
        </Button>
      </form>
    </section>
    </>
  );
};

export default TerminForm;


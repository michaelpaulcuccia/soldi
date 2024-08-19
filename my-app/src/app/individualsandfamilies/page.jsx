import React from "react";
import NavInfoItem from "../../../components/NavInfoItem";
import { INDIVIDUALS_AND_FAMILIES } from "../../../constants";

export default function page() {
  return (
    <div>
      <NavInfoItem
        statement={INDIVIDUALS_AND_FAMILIES.statement}
        image={INDIVIDUALS_AND_FAMILIES.image}
        companyStatement={INDIVIDUALS_AND_FAMILIES.companyStatement}
      />
    </div>
  );
}

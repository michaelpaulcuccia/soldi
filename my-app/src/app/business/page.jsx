import React from "react";
import NavInfoItem from "../../../Components/NavInfoItem";
import { BUSINESS } from "../../../constants";

export default function page() {
  return (
    <div>
      <NavInfoItem
        statement={BUSINESS.statement}
        image={BUSINESS.image}
        companyStatement={BUSINESS.companyStatement}
      />
    </div>
  );
}

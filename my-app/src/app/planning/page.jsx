import React from "react";
import NavInfoItem from "../../../Components/NavInfoItem";
import { PLANNING } from "../../../constants";

export default function page() {
  return (
    <div>
      <NavInfoItem
        statement={PLANNING.statement}
        image={PLANNING.image}
        companyStatement={PLANNING.companyStatement}
      />
    </div>
  );
}

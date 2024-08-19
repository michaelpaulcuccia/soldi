import React from "react";
import NavInfoItem from "../../../components/NavInfoItem";
import { ADVISORY } from "../../../constants";

export default function page() {
  return (
    <div>
      <NavInfoItem
        statement={ADVISORY.statement}
        image={ADVISORY.image}
        companyStatement={ADVISORY.companyStatement}
      />
    </div>
  );
}

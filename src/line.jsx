import React from "react";
import { LineChart } from "@opd/g2plot-react";

const config = {
  title: {
    visible: true,
    text: "daily working hours"
  },
  description: {
    visible: true,
    text: ""
  },
  padding: "auto",
  forceFit: true,
  data: [
    { year: "uuid1", value: 3 },
    { year: "uuid2", value: 4 },
    { year: "uuid3", value: 3.5 },
    { year: "uuid4", value: 5 },
    { year: "uuid5", value: 4.9 },
    { year: "uuid6", value: 6 },
    { year: "uuid7", value: 7 },
    { year: "uuid8", value: 9 },
    { year: "uuid9", value: 13 },
    { year: "uuid10", value: 15 },
    { year: "uuid11", value: 8 },
    { year: "uuid12", value: 12 },
    { year: "uuid13", value: 10 },
    { year: "uuid14", value: 12 },
    { year: "uuid15", value: 13.5 },
    { year: "uuid16", value: 14.5 },
    { year: "uuid17", value: 16 },

  ],
  xField: "year",
  yField: "value",
  smooth: true,
  meta: {
    year: {
      alias: "uuid"
    },
    value: {
      alias: "working hours"
    }
  }
};



export default () => (
  <section>
    <h2>working hours</h2>
    <LineChart {...config} />


  </section>
);

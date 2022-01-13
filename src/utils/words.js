import React from "react";
import faker from "faker";
// const faker = require("faker");

export const generate = (count = 10) => {
  return new Array(count)
    .fill()
    .map(() => faker.random.word().toLowerCase())
    .join(" ");
};

import read from "./reader.js";
import json from "./parser.js";

export class GameSavingLoader {
  async load() {
    return read()
      .then((response) => {
        return json(response)
      })
      .then((data) => {
        return data;
      })
      .catch(error => {
        throw new Error('oops');
      });
  }
}

const result = new GameSavingLoader();
result.load().then(saving => {
  console.log(saving);
}, (error => {
  console.error(error);
}));

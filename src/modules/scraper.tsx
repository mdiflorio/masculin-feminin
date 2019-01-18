import rp from "request-promise";
import $ from "cheerio";

export function nounInfo(noun: string) {
  const BASE_URL = "https://www.larousse.fr/dictionnaires/francais/";

  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}${noun}`)
      .then((html: string) => {
        const nounType = $(".CatgramDefinition", html).text();
        resolve(nounType);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

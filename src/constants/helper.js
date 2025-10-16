import en from "../locales/en";
import vn from "../locales/vn";
import _ from "lodash";
import { store } from "../redux/store";

const getTextWithLang = (keyText) => {
  const lang = store.getState()?.lang?.lang;
  return _.get(lang === "VI" ? vn : en, keyText) || "";
};

export { getTextWithLang };

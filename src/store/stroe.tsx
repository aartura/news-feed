import { atom } from "jotai";
import { NewsInterface } from "../types/types";

export const articleAtom = atom<NewsInterface | null >(null);

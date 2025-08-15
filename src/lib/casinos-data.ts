import { getAllPostsData, sortByRating, sortBySmallestBonusTurnover, sortByFreeSpins, sortByFreeSpinsTurnover, sortByNewCasino } from "./toplist-utils";
import { Casino } from "@/types/types";

export const casinos: Casino[] = getAllPostsData();
export const casinosByRating: Casino[] = sortByRating(casinos);
export const casinosBySmallestBonusTurnover: Casino[] = sortBySmallestBonusTurnover(casinos); 
export const casinosByFreeSpins: Casino[] = sortByFreeSpins(casinos)
export const casinosByFreeSpinsTurnover: Casino[] = sortByFreeSpinsTurnover(casinos)
export const casinosByNewCasino: Casino[] = sortByNewCasino(casinos)  
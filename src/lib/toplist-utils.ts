import { Casino } from "../types/types";
import casinosData from "../data/casinos.json";

export function getAllPostsData(): Casino[] {
  console.log('Debug - casinosData loaded:', casinosData);
  return casinosData as Casino[];
}

export function sortByRating(postsData: Casino[]): Casino[] {
  return [...postsData].sort((a, b) => b.rating - a.rating);
}

function isCasinoWithNumberBonus(post: Casino): post is Casino & { turnoverBonus: number } {
  return typeof post.turnoverBonus === 'number';
}

export function sortBySmallestBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter(isCasinoWithNumberBonus)
    .sort((a, b) => a.turnoverBonus - b.turnoverBonus);
}

export function sortByBonusAmount(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter(isCasinoWithNumberBonus)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortBySwish(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.trustly)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByBankId(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.bankId)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.turnoverBonus === 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByFreeSpins(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => typeof casino.freeSpins === "number" && casino.freeSpins > 0)
    .sort((a, b) => b.freeSpins! - a.freeSpins!);
}

export function sortByFreeSpinsTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => typeof casino.freeSpins === "number" && casino.turnoverFreeSpins === 0)
    .sort((a, b) => b.freeSpins! - a.freeSpins!);
}

export function sortByNewCasino(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.newCasino === true)
    .sort((a, b) => b.rating - a.rating);
}
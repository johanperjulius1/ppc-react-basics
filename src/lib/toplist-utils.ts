import { Casino } from "../types/types";
import casinosData from "../data/casinos.json";

export function getAllPostsData(): Casino[] {
  console.log('Debug - getAllPostsData called');
  console.log('Debug - casinosData loaded:', casinosData);
  console.log('Debug - casinosData type:', typeof casinosData);
  console.log('Debug - casinosData length:', Array.isArray(casinosData) ? casinosData.length : 'Not an array');

  if (Array.isArray(casinosData)) {
    console.log('Debug - First casino:', casinosData[0]);
    console.log('Debug - Second casino:', casinosData[1]);
  }

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
    .filter((casino) => casino.bonusAmount > 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortBySwish(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.swish)
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
    .sort((a, b) => {
      // Ensure both are numbers for comparison
      const aSpins = typeof a.freeSpins === "number" ? a.freeSpins : 0;
      const bSpins = typeof b.freeSpins === "number" ? b.freeSpins : 0;
      return bSpins - aSpins;
    });
}

export function sortByFreeSpinsTurnover(postsData: Casino[]): Casino[] {
  console.log('Debug - sortByFreeSpinsTurnover input:', postsData);

  // Get casinos with no turnover requirements for free spins
  // Since freeSpins and turnoverFreeSpins are consistent, we can check both
  const noTurnoverCasinos = postsData.filter((casino) => {
    // If freeSpins is a number, turnoverFreeSpins should also be a number
    // If freeSpins is a string, turnoverFreeSpins should also be a string
    const hasFreeSpins = typeof casino.freeSpins === "number" && casino.freeSpins > 0;
    const noTurnover = casino.turnoverFreeSpins === 0 || casino.turnoverFreeSpins === "N/A";

    console.log(`Debug - ${casino.title}: freeSpins=${casino.freeSpins}, turnoverFreeSpins=${casino.turnoverFreeSpins}, hasFreeSpins=${hasFreeSpins}, noTurnover=${noTurnover}`);

    // Only include casinos that have actual free spins AND no turnover requirements
    return hasFreeSpins && noTurnover;
  });

  console.log('Debug - noTurnoverCasinos:', noTurnoverCasinos);

  // If we have casinos with no turnover, return them sorted by free spins (highest first)
  if (noTurnoverCasinos.length > 0) {
    return noTurnoverCasinos.sort((a, b) => {
      // Both should be numbers at this point due to our filter
      const aSpins = a.freeSpins as number;
      const bSpins = b.freeSpins as number;
      return bSpins - aSpins;
    });
  }

  // Fallback: return all casinos with free spins, sorted by rating
  console.log('Debug - Falling back to all casinos with free spins, sorted by rating');
  return postsData
    .filter((casino) => typeof casino.freeSpins === "number" && casino.freeSpins > 0)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByNewCasino(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.newCasino === true)
    .sort((a, b) => b.rating - a.rating);
}

// New utility functions for better sorting
export function sortByHighestBonusAmount(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.bonusAmount > 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByNoBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.turnoverBonus === 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByBankIdSupport(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.bankId)
    .sort((a, b) => b.rating - a.rating);
}
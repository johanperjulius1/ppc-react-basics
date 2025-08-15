import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Casino } from "../types/types"; // Adjust the import path as necessary


const postsDirectory = path.join(process.cwd(), "casinos");

export function getPostsFiles() {
  // Returns an array of file names in the directory
  return fs.readdirSync(postsDirectory);
}

export function getAllPostsData(): Casino[] {
  const postFiles = getPostsFiles();
  const allPostsData = postFiles.map((postFile) => {
    const filePath = path.join(postsDirectory, postFile);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      logoObject: {
        logoTitle: data.logoObject.logoTitle,
        logoName: data.logoObject.logoName,
        backgroundColor: data.logoObject.backgroundColor,
        altText: data.logoObject.altText,
        width: data.logoObject.width,
        height: data.logoObject.height
      },
      rating: data.rating,
      bonusAmount: data.bonusAmount,
      freeSpins: data.freeSpins,
      excerpt: data.excerpt,
      positive1: data.positive1,
      positive2: data.positive2,
      turnoverBonus: data.turnoverBonus,
      turnoverFreeSpins: data.turnoverFreeSpins,
      perks: {
        perk1: data.perks?.perk1 || "",
        perk2: data.perks?.perk2 || "",
        perk3: data.perks?.perk3 || "",
        perk4: data.perks?.perk4 || "",
        perk5: data.perks?.perk5 || "",
        perk6: data.perks?.perk6 || "",
      },
      badges: {
        trustly: data.badges.trustly,
        swish: data.badges.swish,
        bankId: data.badges.bankId,
        license: data.badges.license
      },
      newCasino: data.newCasino,
      faq: data.faq,
      affiliateLink: data.affiliateLink,
      reviewLink: data.reviewLink,
      metaDescription: data.metaDescription,
      content
    } as Casino;
  });

  return allPostsData;
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
}

export function sortByNewCasino(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.newCasino === true)
    .sort((a, b) => b.rating - a.rating);
}
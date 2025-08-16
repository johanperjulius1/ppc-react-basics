import fs from "fs";
import path from "path";
import matter from "gray-matter";

const casinosDir = "./casinos";
const outputDir = "./src/data";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all markdown files
const files = fs.readdirSync(casinosDir).filter((file) => file.endsWith(".md"));

const casinos = [];

files.forEach((file) => {
  const filePath = path.join(casinosDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdownContent } = matter(content);

  // Create casino object
  const casino = {
    title: data.title,
    logoObject: data.logoObject,
    rating: data.rating,
    bonusAmount: data.bonusAmount,
    freeSpins: data.freeSpins,
    excerpt: data.excerpt,
    positive1: data.positive1,
    positive2: data.positive2,
    turnoverBonus: data.turnoverBonus,
    turnoverFreeSpins: data.turnoverFreeSpins,
    perks: data.perks,
    badges: data.badges,
    newCasino: data.newCasino,
    faq: data.faq,
    affiliateLink: data.affiliateLink,
    reviewLink: data.reviewLink,
    metaDescription: data.metaDescription,
    content: markdownContent,
  };

  casinos.push(casino);
});

// Write to JSON file
const outputPath = path.join(outputDir, "casinos.json");
fs.writeFileSync(outputPath, JSON.stringify(casinos, null, 2));

console.log(`Converted ${casinos.length} casino files to ${outputPath}`);
console.log(
  "Casino titles:",
  casinos.map((c) => c.title)
);

import Toplist from "@/components/toplist/toplist"
import { casinosByRating } from "@/lib/casinos-data"

export default function Index() {
  const dateDay = new Date().getDate().toString();
  const dateMonth = new Date().toLocaleString('default', { month: 'long' });
  const dateYear = new Date().getFullYear();

  const defaultSubtitle = `Bonusarna uppdaterades den ${dateDay} ${dateMonth} ${dateYear}`;
  return (
    <>
      <h1>hello</h1>
      {defaultSubtitle}
      <Toplist
        casinos={casinosByRating}
        title="Bästa Casinona"
        subtitle={defaultSubtitle}
      />
    </>
  )
}
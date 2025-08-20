import Toplist from "@/components/toplist/toplist";
import { casinosByHighestBonusAmount } from "@/lib/casinos-data";

export default function CasinoMedBonus() {
    return (
        <Toplist
            casinos={casinosByHighestBonusAmount}
            title="Casino med Bonus"
            subtitle="Bästa casinona med generösa bonusar"
        />
    );
}

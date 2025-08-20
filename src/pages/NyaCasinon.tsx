import Toplist from "@/components/toplist/toplist";
import { casinosByNewCasino } from "@/lib/casinos-data";

export default function NyaCasinon() {
    return (
        <Toplist
            casinos={casinosByNewCasino}
            title="Nya Casinon"
            subtitle="Upptäck de senaste casinona"
        />
    );
}

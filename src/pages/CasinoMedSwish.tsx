import Toplist from "@/components/toplist/toplist";
import { casinosBySwishSupport } from "@/lib/casinos-data";

export default function CasinoMedSwish() {
    return (
        <Toplist
            casinos={casinosBySwishSupport}
            title="Casino med Swish"
            subtitle="Bästa casinona som accepterar Swish"
        />
    );
}

import Toplist from "@/components/toplist/toplist";
import { casinosByBankIdSupport } from "@/lib/casinos-data";

export default function CasinoMedBankId() {
    return (
        <Toplist
            casinos={casinosByBankIdSupport}
            title="Casino med BankID"
            subtitle="Bästa casinona som accepterar BankID"
        />
    );
}

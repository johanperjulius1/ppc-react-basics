import classes from "@/components/feber/perks-container.module.css"

interface PerksProps {
    className?: string
    perks: {
        perk1?: string | number
        perk2?: string | number
        perk3?: string | number
        perk4?: string | number
        perk5?: string | number
        perk6?: string | number
    }
}

export default function PerksContainer({ className, perks }: PerksProps) {
    const { perk1, perk2, perk3, perk4, perk5, perk6 } = perks

    return (
        <div className={className}>
            <div className={classes["perks-item"]}>
                <span>{perk1}</span>
            </div>
            <div className={classes["perks-item"]}>
                <span>{perk2}</span>
            </div>
            <div className={classes["perks-item"]}>
                <span>{perk3}</span>
            </div>
            <div className={classes["perks-item"]}>
                <span>{perk4}</span>
            </div>
            <div className={classes["perks-item"]}>
                <span>{perk5}</span>
            </div>
            <div className={classes["perks-item"]}>
                <span>{perk6}</span>
            </div>
        </div>
    )
}
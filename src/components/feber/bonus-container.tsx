import classes from "./bonus-container.module.css"

interface BonusProps {
    title: string
    positive1: string
    positive2: string
    turnoverBonus: number | string
    turnoverFreeSpins: number | string
}

export default function BonusContainer({ title, positive1, positive2, turnoverBonus, turnoverFreeSpins }: BonusProps) {
    return (
        <>
            <h3 className={classes.h3}>{title}</h3>
            <div className={classes.bonus}>{positive1}</div>
            <div className={classes.freespins}>{positive2}</div>
            <div className={classes["bonus-wagering"]}>
                <div className={classes["bonus-turnover"]}>
                    <svg 
                        width="20" 
                        height="20" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="lucide-icon lucide lucide-gauge-circle" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M13.4 10.6 19 5"></path>
                    </svg>
                    <span style={{ marginLeft: "4px" }}>
                        Oms.krav på bonus: <span style={{ fontWeight: "600" }}>{turnoverBonus}</span>
                    </span> 
                </div>
                <div className={classes["freespins-turnover"]}>
                    <svg 
                        width="20" 
                        height="20" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="lucide-icon lucide lucide-badge-dollar-sign" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                        <path d="M12 18V6"></path>
                    </svg>
                    <span style={{ marginLeft: "4px" }}>
                        Oms.krav på freespins: <span style={{ fontWeight: "600", color: "black" }}>{turnoverFreeSpins ? turnoverFreeSpins : 0}</span>
                    </span>
                </div>
            </div>
        </>
    )
}

import classes from "./badge-board.module.css"
import Image from "next/image"

interface BadgeBoardProps {
    className: string
    badges: {
        trustly: boolean
        swish: boolean
        bankId: boolean
        license: boolean
    }
}


export default function BadgeBoard({ className, badges }: BadgeBoardProps) {
    return (
        <div className={`${classes["badges-container"]} ${className}`}>
            <div className={!badges.trustly ? classes["pale"] : ""}>
                <Image alt="Trustly" width={13} height={13} src="/images/badges/trustly.avif" />
                <span>Trustly</span>
            </div>
            <div className={!badges.swish ? classes["pale"] : ""}>
                <Image alt="Swish" width={13} height={13} src="/images/badges/swish.avif"/>
                <span>Swish</span>
            </div>
            <div className={!badges.bankId ? classes["pale"] : ""}>
                <Image alt="BankID" width={13} height={13} src="/images/badges/bankid.avif"/>
                <span>BankID</span>
            </div>
            <div className={!badges.license ? classes["pale"] : ""}>
                <Image alt="Licens" width={13} height={13} src="/images/badges/spelinspektionen.avif"/>
                <span>Licens</span>
            </div>
        </div>
    )
}
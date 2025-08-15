import React from "react"
import classes from "./cta-container.module.css"


interface CtaProps {
    className?: string
    affiliateLink: string
    reviewLink: string
}

export default function CtaContainer({ className, affiliateLink, reviewLink }: CtaProps) {
    return (
        <div className={className}>
            <a className={classes["play-now"]} href={affiliateLink} target="_blank" rel="noopener noreferrer">Spela nu</a>
            <a className={classes["review"]} href={reviewLink} rel="noopener noreferrer">Läs recension</a>
        </div>
    )
}
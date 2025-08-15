import Image from 'next/image';

interface LogoObject {
    logoTitle: string;
    logoName: string;
    backgroundColor: string;
    altText: string;
    width: number;
    height: number;
}

interface LogoProps {
    logoObject: LogoObject;
}

export default function LogoContainer({ logoObject }: LogoProps) {
    const { logoTitle, logoName, backgroundColor, altText, width, height } = logoObject;
    const logoPath = `/images/logos/${logoTitle}/${logoName}`;
    return (
        <div style={{ backgroundColor }}>
            <Image width={width} height={height} src={logoPath} alt={altText} />
        </div>
    );
}

// --- Box-sizing: border-box

// When you set box-sizing: border-box, the width and height 
// properties include the element's padding and border.

// This means that if you set a width of 200px, that 200px 
// includes any padding and border you apply. So if you have 
// 10px of padding and a 2px border, the content area will be 
// reduced accordingly to fit within the total width of 200px.
import { Casino } from "@/types/types";
import classes from './toplist.module.css';
import OperatorContainer from '../feber/operator-container';

interface ToplistProps {
  casinos: Casino[];
  title?: string;
  subtitle?: string;
}

export default function Toplist({
  casinos,
  title,
  subtitle
}: ToplistProps) {
  // Safety check for empty or undefined data
  if (!casinos || casinos.length === 0) {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.headline}>{title || 'Inga casinon hittades'}</h1>
        <h2 className={classes.subtitle}>
          {subtitle || 'Försök igen senare eller kontakta support'}
        </h2>
        <p>Inga casinon matchade dina kriterier just nu.</p>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.headline}>{title}</h1>
      <h2 className={classes.subtitle}>
        {subtitle}
      </h2>
      {casinos.map((casino) => (
        <OperatorContainer key={casino.title} casino={casino} />
      ))}
    </div>
  );
}

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

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.headline}>{title}</h1>
      <h2 className={classes.subtitle}>
      </h2>
      {casinos.map((casino) => (
        <OperatorContainer key={casino.title} casino={casino} />
      ))}
    </div>
  );
}

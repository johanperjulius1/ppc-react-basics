interface StarProps {
  filled: boolean;
  halfFilled?: boolean;
}

const Star: React.FC<StarProps> = ({ filled, halfFilled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <defs>
      <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: "gold", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "gray", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={filled ? "gold" : halfFilled ? "url(#half-fill)" : "gray"}
    />
  </svg>
);

export default Star;

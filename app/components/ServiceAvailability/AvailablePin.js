export default function AvailablePin({ x, y }) {
  return (
    <svg
      x={x - 16}
      y={y - 30}
      width="32"
      height="32"
      className="scale-up"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35 17.7563C35 31.0897 20 39.423 20 39.423C20 39.423 5 31.0897 5 17.7563C5 13.7781 6.58035 9.96279 9.3934 7.14974C12.2064 4.3367 16.0218 2.75635 20 2.75635C23.9782 2.75635 27.7936 4.3367 30.6066 7.14974C33.4196 9.96279 35 13.7781 35 17.7563Z"
        fill="url(#paint0_linear_1475_355)"
      />
      <path
        d="M20.0007 24.4229C23.6825 24.4229 26.6673 21.4382 26.6673 17.7563C26.6673 14.0744 23.6825 11.0896 20.0007 11.0896C16.3188 11.0896 13.334 14.0744 13.334 17.7563C13.334 21.4382 16.3188 24.4229 20.0007 24.4229Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1475_355"
          x1="20"
          y1="2.75635"
          x2="20"
          y2="39.423"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#48799C" />
          <stop offset="0.195" stopColor="#346588" />
          <stop offset="1" stopColor="#16476A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

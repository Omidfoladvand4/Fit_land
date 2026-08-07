
const StarIcon = ({ width = 19, height = 19, color = "#FA541C" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 19 19"
    >
      <g filter="url(#filter0_d_4002_12795)">
        <path
          fill={color}
          d="M13.308 17.013c-.398 0-.908-.128-1.545-.503L9.52 15.182c-.232-.135-.682-.135-.907 0l-2.25 1.328c-1.328.787-2.108.473-2.46.217-.345-.255-.885-.907-.533-2.407l.533-2.302c.06-.24-.06-.653-.24-.833l-1.86-1.86C.873 8.395.948 7.6 1.075 7.21c.128-.39.533-1.08 1.823-1.298l2.392-.397c.225-.037.548-.277.645-.48l1.328-2.647C7.863 1.18 8.65 1 9.063 1c.412 0 1.2.18 1.8 1.388l1.32 2.64c.105.202.427.442.652.48l2.393.397c1.297.217 1.702.907 1.822 1.297s.195 1.185-.727 2.116l-1.86 1.867c-.18.18-.293.585-.24.832l.532 2.303c.345 1.5-.187 2.153-.532 2.407a1.53 1.53 0 0 1-.915.285m-4.245-3.06c.367 0 .735.09 1.027.262l2.243 1.328c.652.39 1.065.39 1.222.277s.27-.51.105-1.245l-.532-2.302c-.143-.623.09-1.425.54-1.883l1.86-1.86c.367-.367.532-.727.457-.975-.082-.247-.427-.45-.937-.532l-2.393-.398c-.577-.098-1.207-.562-1.47-1.088l-1.32-2.64c-.24-.48-.54-.764-.802-.764-.263 0-.563.285-.795.765L6.94 5.538c-.262.524-.892.99-1.47 1.087l-2.385.397c-.51.083-.855.285-.937.533s.09.615.457.975l1.86 1.86c.45.45.683 1.26.54 1.883l-.532 2.302c-.173.743-.053 1.133.105 1.245.157.112.562.105 1.222-.277l2.243-1.328a2 2 0 0 1 1.02-.262"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4002_12795"
          width="20"
          height="20"
          x="-0.938"
          y="-0.99"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.329412 0 0 0 0 0.109804 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4002_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4002_12795"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StarIcon;
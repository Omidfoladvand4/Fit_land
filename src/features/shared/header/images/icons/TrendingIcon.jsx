
const TrendingIcon = ({ width = 18, height = 19, color = "#FA541C" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 19"
    >
      <g filter="url(#filter0_d_4002_12788)">
        <path
          fill={color}
          d="M7.491 17.128c-.15 0-.27-.03-.36-.067-.3-.113-.81-.48-.81-1.643v-4.837H4.566c-1.005 0-1.365-.473-1.492-.75-.128-.285-.24-.863.42-1.62l5.677-6.45c.765-.87 1.388-.81 1.688-.698s.81.48.81 1.643v4.837h1.755c1.005 0 1.365.473 1.492.75.128.285.24.863-.42 1.62l-5.677 6.45c-.533.608-.998.765-1.328.765m2.956-15.007c-.023.03-.18.105-.428.39L4.341 8.96c-.21.24-.24.39-.24.42.015.007.15.082.465.082h2.318c.307 0 .562.255.562.563v5.4c0 .375.068.54.098.585.022-.03.18-.105.427-.39l5.678-6.45c.21-.24.24-.39.24-.42-.015-.008-.15-.083-.465-.083h-2.317a.567.567 0 0 1-.563-.562v-5.4c.008-.375-.068-.533-.098-.585"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4002_12788"
          width="20"
          height="20"
          x="-1"
          y="-0.934"
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
            result="effect1_dropShadow_4002_12788"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4002_12788"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TrendingIcon;
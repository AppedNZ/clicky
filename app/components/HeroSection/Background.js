"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "./Background.module.scss";
export default function Background() {
  useEffect(() => {
    const targets = document.querySelectorAll("g[class]"); // Select all <g> elements with a class

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class to play the animation when in view
            // entry.target.classList.add("animate");
            entry.target.classList.add("paused");
          } else {
            // Pause the animation when out of view
            entry.target.classList.add("paused");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold based on visibility requirement
    );

    // Observe each <g> element individually
    targets.forEach((target) => observer.observe(target));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <svg
        className="absolute top-1/2 -translate-x-[15%] lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-auto lg:w-full h-full  object-cover  overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 1080"
        fill="none">
        <g clipPath="url(#clip0_1182_6)">
          <rect width="1920" height="1080" fill="url(#paint0_radial_1182_6)" />
          <g filter="url(#filter0_d_1182_6)">
            <path d="M337 452.5L350 320.5L236.5 469L337 452.5Z" fill="url(#paint1_linear_1182_6)" />
            <path
              d="M337 452.5L388 482L284 497.5L236.5 469L337 452.5Z"
              fill="url(#paint2_linear_1182_6)"
            />
            <path
              d="M337 452.5L350 320.5L398 348.5L388 482L337 452.5Z"
              fill="url(#paint3_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter1_d_1182_6)">
            <path
              d="M1578.76 719.941L1468.06 713.039L1595.56 803.426L1578.76 719.941Z"
              fill="url(#paint4_linear_1182_6)"
            />
            <path
              d="M1578.76 719.941L1601.88 676.439L1617.95 762.879L1595.56 803.426L1578.76 719.941Z"
              fill="url(#paint5_linear_1182_6)"
            />
            <path
              d="M1578.76 719.941L1468.06 713.039L1490.02 672.089L1601.88 676.439L1578.76 719.941Z"
              fill="url(#paint6_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter2_d_1182_6)">
            <path
              d="M1878.37 36.264L1959.58 -39.2685L1806.25 -9.02263L1878.37 36.264Z"
              fill="url(#paint7_linear_1182_6)"
            />
            <path
              d="M1878.37 36.264L1894 82.9814L1820.25 35.1308L1806.25 -9.02263L1878.37 36.264Z"
              fill="url(#paint8_linear_1182_6)"
            />
            <path
              d="M1878.37 36.264L1959.58 -39.2685L1974.17 4.84832L1894 82.9815L1878.37 36.264Z"
              fill="url(#paint9_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter3_d_1182_6)">
            <path
              d="M80.2973 1134.15L-27.5181 1056.89L44.3367 1229.43L80.2973 1134.15Z"
              fill="url(#paint10_linear_1182_6)"
            />
            <path
              d="M80.2973 1134.15L-27.5181 1056.89L20.7306 1029.32L131.345 1104.73L80.2973 1134.15Z"
              fill="url(#paint11_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter4_d_1182_6)">
            <path d="M625 -76L612 56L725.5 -92.5L625 -76Z" fill="url(#paint12_linear_1182_6)" />
            <path
              d="M625 -76L612 56L564 28L574 -105.5L625 -76Z"
              fill="url(#paint13_linear_1182_6)"
            />
          </g>
          <g
            style={{
              transformOrigin: "0% 0%",
            }}
            className={`${styles.topTriangle} to-pause`}
            filter="url(#filter5_d_1182_6)">
            <path d="M298 155.5L564.5 144.5L97 256L298 155.5Z" fill="url(#paint14_linear_1182_6)" />
            <path d="M298 155.5L224.5 -77L97 256L298 155.5Z" fill="url(#paint15_linear_1182_6)" />
            <path
              d="M298 155.5L224.5 -77L564 144.5L298 155.5Z"
              fill="url(#paint16_linear_1182_6)"
            />
          </g>
          <g
            style={{
              transformOrigin: "100% 50%",
              animationDelay: "0.5s",
              animationDuration: "9.5s",
            }}
            //   className={styles.rightTriangle}
            filter="url(#filter6_d_1182_6)">
            <path
              d="M1789.39 359.135L1477 372.029L2025 241.33L1789.39 359.135Z"
              fill="url(#paint17_linear_1182_6)"
            />
            <path
              d="M1789.39 359.135L1875.55 631.67L2025 241.33L1789.39 359.135Z"
              fill="url(#paint18_linear_1182_6)"
            />
            <path
              d="M1789.39 359.135L1875.55 631.67L1477.59 372.03L1789.39 359.135Z"
              fill="url(#paint19_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter7_d_1182_6)">
            <path
              d="M1866.17 1091.32L1563.45 1169.52L2071.79 926.674L1866.17 1091.32Z"
              fill="url(#paint20_linear_1182_6)"
            />
            <path
              d="M1866.17 1091.32L2007.62 1339.69L2071.79 926.674L1866.17 1091.32Z"
              fill="url(#paint21_linear_1182_6)"
            />
            <path
              d="M1866.17 1091.32L2007.62 1339.69L1564.02 1169.39L1866.17 1091.32Z"
              fill="url(#paint22_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter8_d_1182_6)">
            <path
              d="M1.51945 -2.41409L227.09 -184.034L-109.097 215.067L1.51945 -2.41409Z"
              fill="url(#paint23_linear_1182_6)"
            />
            <path
              d="M1.5189 -2.41403L-212.722 -157.959L-109.097 215.067L1.5189 -2.41403Z"
              fill="url(#paint24_linear_1182_6)"
            />
            <path
              d="M1.51906 -2.41391L-212.722 -157.959L226.653 -183.711L1.51906 -2.41391Z"
              fill="url(#paint25_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter9_d_1182_6)">
            <path
              d="M410.877 1151.17L145.823 1181L604.262 1036.7L410.877 1151.17Z"
              fill="url(#paint26_linear_1182_6)"
            />
            <path
              d="M410.877 1151.17L500.643 1377.89L604.262 1036.7L410.877 1151.17Z"
              fill="url(#paint27_linear_1182_6)"
            />
          </g>
          <g
            style={{ transformOrigin: "100% 10%" }}
            className={styles.bottomLeftTriangle}
            filter="url(#filter10_d_1182_6)">
            <path
              d="M169 998.5L136 752.5L350 880.5L169 998.5Z"
              fill="url(#paint28_linear_1182_6)"
            />
            <path d="M169 998.5L136 752.5L28 957L169 998.5Z" fill="url(#paint29_linear_1182_6)" />
          </g>
          <g filter="url(#filter11_d_1182_6)">
            <path
              d="M1384.76 1279.86L1366.28 1032.35L1572.38 1172.71L1384.76 1279.86Z"
              fill="url(#paint30_linear_1182_6)"
            />
            <path
              d="M1384.76 1279.86L1366.28 1032.35L1246.44 1230.15L1384.76 1279.86Z"
              fill="url(#paint31_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter12_d_1182_6)">
            <path
              d="M1487.27 174.808L1449.76 -104.807L1693 40.6833L1487.27 174.808Z"
              fill="url(#paint32_linear_1182_6)"
            />
            <path
              d="M1487.27 174.808L1449.76 -104.807L1327 127.637L1487.27 174.808Z"
              fill="url(#paint33_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter13_d_1182_6)">
            <path
              d="M351.5 636.5L345.5 630.5L253 692.5L257.5 699L351.5 636.5Z"
              fill="url(#paint34_linear_1182_6)"
            />
            <path
              d="M280.486 632L284.5 638.5L275.5 669L268 673L280.486 632Z"
              fill="url(#paint35_linear_1182_6)"
            />
            <path
              d="M280.486 632L284.5 638.5L321 642L323.5 636L280.486 632Z"
              fill="url(#paint36_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M253 692.5L345.5 630.5L274 623L253 692.5ZM268 673L323 636.424L280.486 632L268 673Z"
              fill="url(#paint37_linear_1182_6)"
            />
          </g>
          <g
            style={{ transformOrigin: "100% 10%" }}
            className={styles.rightTriangle}
            filter="url(#filter14_d_1182_6)">
            <path
              d="M1732.73 91.2436L1724.91 98.1409L1793.85 216.292L1802.17 211.272L1732.73 91.2436Z"
              fill="url(#paint38_linear_1182_6)"
            />
            <path
              d="M1721.78 177.965L1730.06 173.541L1766.76 186.909L1771.09 196.41L1721.78 177.965Z"
              fill="url(#paint39_linear_1182_6)"
            />
            <path
              d="M1721.78 177.965L1730.06 173.542L1737.14 129.059L1729.97 125.535L1721.78 177.965Z"
              fill="url(#paint40_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1793.85 216.292L1724.91 98.141L1710.25 185.229L1793.85 216.292ZM1771.09 196.41L1730.46 126.18L1721.78 177.965L1771.09 196.41Z"
              fill="url(#paint41_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter15_d_1182_6)">
            <path
              d="M1607 1044.8L1601.15 1038.95L1511 1099.37L1515.39 1105.71L1607 1044.8Z"
              fill="url(#paint42_linear_1182_6)"
            />
            <path
              d="M1537.79 1040.41L1541.7 1046.75L1532.93 1076.47L1525.62 1080.37L1537.79 1040.41Z"
              fill="url(#paint43_linear_1182_6)"
            />
            <path
              d="M1537.79 1040.41L1541.7 1046.75L1577.27 1050.16L1579.71 1044.31L1537.79 1040.41Z"
              fill="url(#paint44_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1511 1099.37L1601.15 1038.95L1531.47 1031.64L1511 1099.37ZM1525.62 1080.37L1579.22 1044.72L1537.79 1040.41L1525.62 1080.37Z"
              fill="url(#paint45_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter16_d_1182_6)">
            <path
              d="M86.5668 800.685L78.3583 789.882L-81.5945 868.109L-75.8705 879.38L86.5668 800.685Z"
              fill="url(#paint46_linear_1182_6)"
            />
            <path
              d="M-24.9673 778.202L-20.014 789.367L37.0564 802.804L42.3144 793.839L-24.9673 778.202Z"
              fill="url(#paint47_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-81.5945 868.109L78.3583 789.882L-33.2976 762.54L-81.5945 868.109ZM-53.6139 840.458L41.4306 794.403L-24.9669 778.202L-53.6139 840.458Z"
              fill="url(#paint48_linear_1182_6)"
            />
          </g>
          <g filter="url(#filter17_d_1182_6)">
            <path
              d="M55.8628 385.022L62.5098 371.771L-91.2051 252.51L-99.5067 263.55L55.8628 385.022Z"
              fill="url(#paint49_linear_1182_6)"
            />
            <path
              d="M24.2425 264.792L15.6731 275.025L-39.8547 276.886L-50.6151 266.651L24.2425 264.792Z"
              fill="url(#paint50_linear_1182_6)"
            />
            <path
              d="M24.2422 264.792L15.6728 275.024L29.957 337.474L41.282 338.318L24.2422 264.792Z"
              fill="url(#paint51_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-91.2049 252.51L62.5099 371.771L35.5964 249.083L-91.2049 252.51ZM-50.6151 266.651L40.3032 337.722L24.2425 264.792L-50.6151 266.651Z"
              fill="url(#paint52_linear_1182_6)"
            />
          </g>
          <g className="max-md:hidden" filter="url(#filter18_d_1182_6)">
            <path
              d="M376.46 975.33L383.283 977.853L433.1 896.411L427.265 892.961L376.46 975.33Z"
              fill="url(#paint53_linear_1182_6)"
            />
            <path
              d="M433.379 953.381L427.924 949.757L424.001 922.777L428.408 916.974L433.379 953.381Z"
              fill="url(#paint54_linear_1182_6)"
            />
            <path
              d="M433.379 953.381L427.924 949.757L398.243 960.115L398.446 965.683L433.379 953.381Z"
              fill="url(#paint55_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M433.1 896.41L383.283 977.852L441.657 958.065L433.1 896.41ZM428.408 916.974L398.683 965.174L433.379 953.381L428.408 916.974Z"
              fill="url(#paint56_linear_1182_6)"
            />
          </g>
          {/* <g filter="url(#filter19_d_1182_6)">
            <path
              d="M1477.4 543.982L1484.23 546.504L1534.04 465.062L1528.21 461.613L1477.4 543.982Z"
              fill="url(#paint57_linear_1182_6)"
            />
            <path
              d="M1534.32 522.033L1528.87 518.409L1524.94 491.429L1529.35 485.626L1534.32 522.033Z"
              fill="url(#paint58_linear_1182_6)"
            />
            <path
              d="M1534.32 522.033L1528.87 518.409L1499.18 528.766L1499.39 534.335L1534.32 522.033Z"
              fill="url(#paint59_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1534.04 465.062L1484.23 546.504L1542.6 526.717L1534.04 465.062ZM1529.35 485.626L1499.63 533.825L1534.32 522.033L1529.35 485.626Z"
              fill="url(#paint60_linear_1182_6)"
            />
          </g> */}
          <g filter="url(#filter20_d_1182_6)">
            <path
              d="M1952.96 867L1959.01 855.453L1825.73 748.181L1818.26 757.757L1952.96 867Z"
              fill="url(#paint61_linear_1182_6)"
            />
            <path
              d="M1927.05 760.792L1919.35 769.654L1870.5 770.419L1861.2 761.251L1927.05 760.792Z"
              fill="url(#paint62_linear_1182_6)"
            />
            <path
              d="M1927.05 760.792L1919.35 769.654L1930.93 824.787L1940.87 825.706L1927.05 760.792Z"
              fill="url(#paint63_linear_1182_6)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1825.73 748.181L1959.01 855.453L1937.28 747.158L1825.73 748.181ZM1861.2 761.251L1940.02 825.167L1927.05 760.792L1861.2 761.251Z"
              fill="url(#paint64_linear_1182_6)"
            />
          </g>
          <motion.g filter="url(#filter21_d_1182_6)">
            <path d="M83.5 524L187 394.5L143.5 713L83.5 524Z" fill="url(#paint65_linear_1182_6)" />
            <path d="M83.5 524L187 394.5L-109 507.5L83.5 524Z" fill="url(#paint66_linear_1182_6)" />
            <path d="M83.5 524L143.5 713L-109 507.5L83.5 524Z" fill="url(#paint67_linear_1182_6)" />
          </motion.g>
          <g
            style={{ transformOrigin: "100% 100%" }}
            className={styles.rightTriangle}
            filter="url(#filter22_d_1182_6)">
            <path
              d="M1766 903L1832.5 955.5L1559 919.5L1766 903Z"
              fill="url(#paint68_linear_1182_6)"
            />
            <path
              d="M1766 903L1832.5 955.5L1711.5 745.5L1766 903Z"
              fill="url(#paint69_linear_1182_6)"
            />
            <path
              d="M1766 902.999L1559 919.5L1711.5 745.5L1766 902.999Z"
              fill="url(#paint70_linear_1182_6)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1182_6"
            x="162.5"
            y="320.5"
            width="269.5"
            height="305"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_1182_6"
            x="1394.06"
            y="672.089"
            width="257.885"
            height="259.337"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_1182_6"
            x="1732.25"
            y="-39.2686"
            width="275.915"
            height="250.25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_1182_6"
            x="-101.518"
            y="1029.32"
            width="266.863"
            height="328.113"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_1182_6"
            x="490"
            y="-121"
            width="269.5"
            height="305"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_1182_6"
            x="23"
            y="-77"
            width="575.5"
            height="461"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter6_d_1182_6"
            x="1403"
            y="241.33"
            width="656"
            height="518.34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter7_d_1182_6"
            x="1489.45"
            y="926.674"
            width="616.344"
            height="541.019"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter8_d_1182_6"
            x="-286.722"
            y="-184.034"
            width="547.812"
            height="527.101"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter9_d_1182_6"
            x="71.8232"
            y="1036.7"
            width="566.439"
            height="469.187"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter10_d_1182_6"
            x="-46"
            y="752.5"
            width="430"
            height="374"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter11_d_1182_6"
            x="1172.44"
            y="1032.35"
            width="433.94"
            height="375.515"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter12_d_1182_6"
            x="1253"
            y="-104.807"
            width="474"
            height="407.615"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter13_d_1182_6"
            x="189"
            y="613"
            width="206.5"
            height="184"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter14_d_1182_6"
            x="1646.25"
            y="81.2435"
            width="199.917"
            height="233.048"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter15_d_1182_6"
            x="1447"
            y="1021.64"
            width="204"
            height="182.071"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter16_d_1182_6"
            x="-145.594"
            y="752.54"
            width="276.161"
            height="224.839"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter17_d_1182_6"
            x="-163.507"
            y="239.083"
            width="270.017"
            height="243.939"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter18_d_1182_6"
            x="312.46"
            y="882.961"
            width="173.197"
            height="192.891"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter19_d_1182_6"
            x="1413.4"
            y="451.613"
            width="173.197"
            height="192.891"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <motion.filter
            id="filter20_d_1182_6"
            animate={{ attrX: [0, 10, -10, 0], attrY: [0, 5, -5, 0] }}
            width="248.752"
            height="227.841"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="44" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </motion.filter>
          <filter
            id="filter21_d_1182_6"
            x="-183"
            y="394.5"
            width="404"
            height="446.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <filter
            id="filter22_d_1182_6"
            x="1485"
            y="745.5"
            width="381.5"
            height="338"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-20" dy="74" />
            <feGaussianBlur stdDeviation="27" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1182_6" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1182_6"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1182_6"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(960 540) rotate(-180) scale(960 960)">
            <stop offset="0.4" stopColor="#FF9F00" />
            <stop offset="1" stopColor="#F75900" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_1182_6"
            x1="350"
            y1="320"
            x2="287"
            y2="458.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA000" />
            <stop offset="1" stopColor="#FE8D01" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1182_6"
            x1="360.5"
            y1="466.5"
            x2="262.5"
            y2="484"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC303" />
            <stop offset="1" stopColor="#FFA502" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1182_6"
            x1="376.5"
            y1="335.5"
            x2="363"
            y2="467"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC504" />
            <stop offset="1" stopColor="#FDA400" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1182_6"
            x1="1467.65"
            y1="713.054"
            x2="1585.27"
            y2="761.542"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA000" />
            <stop offset="1" stopColor="#FE8D01" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1182_6"
            x1="1589.75"
            y1="699.884"
            x2="1607.31"
            y2="781.249"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC303" />
            <stop offset="1" stopColor="#FFA502" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1182_6"
            x1="1479.8"
            y1="690.445"
            x2="1590.09"
            y2="697.78"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC504" />
            <stop offset="1" stopColor="#FDA400" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1182_6"
            x1="1959.86"
            y1="-39.5819"
            x2="1843.71"
            y2="12.3489"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA000" />
            <stop offset="1" stopColor="#FE8D01" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1182_6"
            x1="1885.35"
            y1="58.0456"
            x2="1814.24"
            y2="14.7695"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC303" />
            <stop offset="1" stopColor="#FFA502" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1182_6"
            x1="1967.89"
            y1="-15.1996"
            x2="1886.64"
            y2="59.7428"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC504" />
            <stop offset="1" stopColor="#FDA400" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1182_6"
            x1="-27.9511"
            y1="1056.64"
            x2="60.4934"
            y2="1180.45"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA000" />
            <stop offset="1" stopColor="#FE8D01" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_1182_6"
            x1="-1.27769"
            y1="1041.44"
            x2="105.855"
            y2="1118.88"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC504" />
            <stop offset="1" stopColor="#FDA400" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_1182_6"
            x1="612"
            y1="56.5"
            x2="675"
            y2="-82"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCA000" />
            <stop offset="1" stopColor="#FE8D01" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_1182_6"
            x1="585.5"
            y1="41"
            x2="599"
            y2="-90.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEC504" />
            <stop offset="1" stopColor="#FDA400" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_1182_6"
            x1="299"
            y1="156"
            x2="311"
            y2="206"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F98C00" />
            <stop offset="1" stopColor="#FF9A02" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_1182_6"
            x1="299"
            y1="156"
            x2="156"
            y2="107"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCC900" />
            <stop offset="1" stopColor="#FAA100" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_1182_6"
            x1="299"
            y1="156"
            x2="410.5"
            y2="39"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA401" />
            <stop offset="1" stopColor="#FEC601" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_1182_6"
            x1="1788.22"
            y1="358.549"
            x2="1774.15"
            y2="299.94"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F98C00" />
            <stop offset="1" stopColor="#FF9A02" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_1182_6"
            x1="1788.22"
            y1="358.549"
            x2="1955.84"
            y2="415.987"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCC900" />
            <stop offset="1" stopColor="#FAA100" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_1182_6"
            x1="1788.22"
            y1="358.549"
            x2="1657.52"
            y2="495.696"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA401" />
            <stop offset="1" stopColor="#FEC601" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_1182_6"
            x1="1864.9"
            y1="1090.99"
            x2="1838.84"
            y2="1036.64"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F98C00" />
            <stop offset="1" stopColor="#FF9A02" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_1182_6"
            x1="1864.9"
            y1="1090.99"
            x2="2040.84"
            y2="1111.96"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCC900" />
            <stop offset="1" stopColor="#FAA100" />
          </linearGradient>
          <linearGradient
            id="paint22_linear_1182_6"
            x1="1864.9"
            y1="1090.99"
            x2="1765.91"
            y2="1252.53"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA401" />
            <stop offset="1" stopColor="#FEC601" />
          </linearGradient>
          <linearGradient
            id="paint23_linear_1182_6"
            x1="2.71525"
            y1="-2.62303"
            x2="45.4653"
            y2="33.2844"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F98C00" />
            <stop offset="1" stopColor="#FF9A02" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_1182_6"
            x1="2.71468"
            y1="-2.62299"
            x2="-153.761"
            y2="46.8986"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCC900" />
            <stop offset="1" stopColor="#FAA100" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_1182_6"
            x1="2.71484"
            y1="-2.6229"
            x2="24.5417"
            y2="-176.74"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA401" />
            <stop offset="1" stopColor="#FEC601" />
          </linearGradient>
          <linearGradient
            id="paint26_linear_1182_6"
            x1="409.844"
            y1="1150.75"
            x2="394.336"
            y2="1101.72"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F98C00" />
            <stop offset="1" stopColor="#FF9A02" />
          </linearGradient>
          <linearGradient
            id="paint27_linear_1182_6"
            x1="409.844"
            y1="1150.75"
            x2="555.952"
            y2="1189.51"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCC900" />
            <stop offset="1" stopColor="#FAA100" />
          </linearGradient>
          <linearGradient
            id="paint28_linear_1182_6"
            x1="156"
            y1="893.5"
            x2="243"
            y2="816.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEB501" />
            <stop offset="1" stopColor="#FDCA00" />
          </linearGradient>
          <linearGradient
            id="paint29_linear_1182_6"
            x1="156"
            y1="893.5"
            x2="28"
            y2="957"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FE8800" />
            <stop offset="1" stopColor="#FE9D00" />
          </linearGradient>
          <linearGradient
            id="paint30_linear_1182_6"
            x1="1377.95"
            y1="1174.28"
            x2="1469.33"
            y2="1102.53"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEB501" />
            <stop offset="1" stopColor="#FDCA00" />
          </linearGradient>
          <linearGradient
            id="paint31_linear_1182_6"
            x1="1377.95"
            y1="1174.28"
            x2="1246.44"
            y2="1230.15"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FE8800" />
            <stop offset="1" stopColor="#FE9D00" />
          </linearGradient>
          <linearGradient
            id="paint32_linear_1182_6"
            x1="1472.49"
            y1="55.4597"
            x2="1571.38"
            y2="-32.0621"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEB501" />
            <stop offset="1" stopColor="#FDCA00" />
          </linearGradient>
          <linearGradient
            id="paint33_linear_1182_6"
            x1="1472.49"
            y1="55.4597"
            x2="1327"
            y2="127.637"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FE8800" />
            <stop offset="1" stopColor="#FE9D00" />
          </linearGradient>
          <linearGradient
            id="paint34_linear_1182_6"
            x1="297"
            y1="662"
            x2="302"
            y2="669"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint35_linear_1182_6"
            x1="283"
            y1="636.5"
            x2="273.24"
            y2="669.571"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint36_linear_1182_6"
            x1="322"
            y1="639"
            x2="282.48"
            y2="636.287"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint37_linear_1182_6"
            x1="351"
            y1="636.5"
            x2="257"
            y2="699"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint38_linear_1182_6"
            x1="1759.82"
            y1="160.013"
            x2="1768.79"
            y2="154.418"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint39_linear_1182_6"
            x1="1727.49"
            y1="175.228"
            x2="1767.29"
            y2="189.723"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint40_linear_1182_6"
            x1="1733.54"
            y1="127.603"
            x2="1727.19"
            y2="175.848"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint41_linear_1182_6"
            x1="1732.69"
            y1="91.8566"
            x2="1802.13"
            y2="211.885"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint42_linear_1182_6"
            x1="1553.88"
            y1="1069.65"
            x2="1558.76"
            y2="1076.47"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint43_linear_1182_6"
            x1="1540.24"
            y1="1044.8"
            x2="1530.73"
            y2="1077.03"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint44_linear_1182_6"
            x1="1578.25"
            y1="1047.23"
            x2="1539.73"
            y2="1044.59"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint45_linear_1182_6"
            x1="1606.51"
            y1="1044.8"
            x2="1514.9"
            y2="1105.71"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint46_linear_1182_6"
            x1="-5.29089"
            y1="829.301"
            x2="1.11715"
            y2="841.472"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint47_linear_1182_6"
            x1="39.2893"
            y1="798.267"
            x2="-22.7352"
            y2="785.425"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint48_linear_1182_6"
            x1="85.7747"
            y1="800.577"
            x2="-76.6626"
            y2="879.272"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint49_linear_1182_6"
            x1="-16.415"
            y1="308.685"
            x2="-25.2706"
            y2="320.828"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint50_linear_1182_6"
            x1="18.164"
            y1="271.437"
            x2="-42.045"
            y2="273.454"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint51_linear_1182_6"
            x1="35.4819"
            y1="337.482"
            x2="18.2307"
            y2="270.458"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint52_linear_1182_6"
            x1="55.5877"
            y1="384.193"
            x2="-99.7817"
            y2="262.72"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint53_linear_1182_6"
            x1="409.765"
            y1="935.936"
            x2="403.362"
            y2="932.276"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint54_linear_1182_6"
            x1="429.809"
            y1="950.777"
            x2="425.556"
            y2="921.523"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint55_linear_1182_6"
            x1="398.539"
            y1="962.809"
            x2="430.29"
            y2="950.757"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint56_linear_1182_6"
            x1="376.849"
            y1="975.151"
            x2="427.655"
            y2="892.782"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint57_linear_1182_6"
            x1="1510.71"
            y1="504.587"
            x2="1504.3"
            y2="500.928"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint58_linear_1182_6"
            x1="1530.75"
            y1="519.429"
            x2="1526.5"
            y2="490.175"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint59_linear_1182_6"
            x1="1499.48"
            y1="531.461"
            x2="1531.23"
            y2="519.408"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint60_linear_1182_6"
            x1="1477.79"
            y1="543.803"
            x2="1528.6"
            y2="461.434"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint61_linear_1182_6"
            x1="1890.61"
            y1="798.746"
            x2="1882.63"
            y2="809.284"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5D100" />
            <stop offset="1" stopColor="#FED100" />
          </linearGradient>
          <linearGradient
            id="paint62_linear_1182_6"
            x1="1921.6"
            y1="766.539"
            x2="1868.63"
            y2="767.367"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD402" />
            <stop offset="1" stopColor="#FDD100" />
          </linearGradient>
          <linearGradient
            id="paint63_linear_1182_6"
            x1="1935.79"
            y1="824.88"
            x2="1921.67"
            y2="765.679"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDC500" />
            <stop offset="1" stopColor="#FFC904" />
          </linearGradient>
          <linearGradient
            id="paint64_linear_1182_6"
            x1="1952.73"
            y1="866.266"
            x2="1818.03"
            y2="757.023"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDB03" />
            <stop offset="1" stopColor="#FFDB08" />
          </linearGradient>
          <linearGradient
            id="paint65_linear_1182_6"
            x1="187"
            y1="398.5"
            x2="102.5"
            y2="583"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC301" />
            <stop offset="1" stopColor="#FFA300" />
          </linearGradient>
          <linearGradient
            id="paint66_linear_1182_6"
            x1="59"
            y1="444"
            x2="82.5"
            y2="524"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8AA03" />
            <stop offset="1" stopColor="#FFC702" />
          </linearGradient>
          <linearGradient
            id="paint67_linear_1182_6"
            x1="17"
            y1="610"
            x2="82.5"
            y2="524"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9900" />
            <stop offset="1" stopColor="#FF8900" />
          </linearGradient>
          <linearGradient
            id="paint68_linear_1182_6"
            x1="1767.5"
            y1="910.5"
            x2="1718.5"
            y2="942.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8A00" />
            <stop offset="1" stopColor="#F89700" />
          </linearGradient>
          <linearGradient
            id="paint69_linear_1182_6"
            x1="1766.5"
            y1="902"
            x2="1790"
            y2="882.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5AB00" />
            <stop offset="1" stopColor="#FFB701" />
          </linearGradient>
          <linearGradient
            id="paint70_linear_1182_6"
            x1="1766.5"
            y1="902"
            x2="1637.5"
            y2="832"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC702" />
            <stop offset="1" stopColor="#FC9700" />
          </linearGradient>
          <clipPath id="clip0_1182_6">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "30px", // <-- border radius is same for all variants and sizes
    width: "120px",
    transition: "all 0.4s",
    _hover: {
      cursor: "pointer",
      opacity: "0.85",
      transition: "all 0.4s",
    },
  },
  // Two sizes: sm and md
  sizes: {
    s: {
      fontSize: "m",
      width: "100px",
      height: "40px",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },

    sm: {
      fontSize: "m",
      width: "160px",
      height: "50px",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      // width: {{ base: "100px", md: "180px" }},
      width: "180px",
      height: "50px",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
    xl: {
      fontSize: "md",
      width: "180px",
      px: 6, // <-- these values are tokens from the design system
      py: 4,
    },
    humSize: {
      width: "50px",
      height: "50px",
    },
  },
  // Two variants: outline and solid
  variants: {
    //blueのグラデーションボタン
    blGradient: {
      bgGradient: "linear(to-r, #0B0742 10%, #120C62 80%)",
      color: "white",
    },
    orange: {
      bg: "#F8665D",
      color: "white",
    },
    pinkPurple: {
      bgGradient: "linear(to-r, #5D73EB 10%, #FE9290 80%)",
      color: "white",
    },
    none: {
      opacity: "10",
      color: "#252525",
    },
    pointBlue: {
      bg: "#4365DD",
      color: "white",
    },
    pointOrange: {
      bg: "#FFAC0A",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "blGradient",
  },
};

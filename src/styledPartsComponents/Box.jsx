export const Box = {
  // The styles all button have in common
  baseStyle: {
    py: "20",
    px: "5",
  },
  // Two sizes: sm and md
  sizes: {
    non: {
      px: 0,
      py: 0,
    },
    md: {
      py: "20",
      px: "5",
    },
  },

  variants: {
    // blGradient: {
    //   bgGradient: "linear(to-r, #0B0742 10%, #120C62 80%)",
    //   color: "white",
    // },
  },
  // The default size and variant values
  defaultProps: {
    size: "non",
  },
};

import { extendTheme } from "@chakra-ui/react";
import { Button } from "../styledPartsComponents/Button";
import { Box } from "../styledPartsComponents/Box";
import { Button2 } from "../styledPartsComponents/Button2";

export const Theme = extendTheme({
  styles: {
    global: {
      body: {
        // backgroundColor: "#FDFCFC",
        backgroundColor: "#FAF8F7",
        color: "gray.900",
        fontWeight: "semibold",
      },
      a: {
        _focus: {
          outline: 0,
        },
      },

      h2: {
        fontSize: ["24px", "28px"],
        mb: ["10px", "15px"],
        color: "#252525",
        textAlign: "center",
      },

      h3: {
        fontSize: ["18px", "26px"],
        fontWeight: "600",
        // color: "#252525",
        textAlign: "center",
        mb: ["10px", "15px"],
      },
      time: {
        fontSize: "5px",
        color: "gray.800",
      },
    },
  },
  fonts: {
    Heading: "Cabin, sans-serif",
    body: "Noto Sans JP, sans-serif",
    pop: "Poppins, sans-serif",
    inter: "inter, sans-serif",
    roboto: "Roboto, sans-serif",
    noto: "Noto Sans JP, sans-serif",
  },
  colors: {
    grayBg: "#fdfdfd",
    mainGray: "#faf7f7",
    opaicGray: "#F7F7FA",
    pointCoral: "#F8665D",
    pointCoal2: "FF9190",
    pointBlue: "#4365DD",
    bl: "#0B0742",
    blGradient: "linear(to-r, #0B0742 10%, #120C62 80%)",
    border: "#EEE8E8",
    navy: "#113366",
    schor: "#1A40C6",
    interviewBeige: "#F0EAE6",
    interviewGreen: "#D3DCDB",
    interviewPurple: "#EFE9F1",
    headingNavy: "#0C0834",
    gold: "#C6A78B",
    earthGreen: "#D4DDD3",
    boshuBlue: "#D6DCFB",
  },
  fontSizes: {
    grande: "32px",
    xxl: "28px",
    xl: "26px",
    lg: "20px",
    md: "18px",
    m: "16px",
    s: "14px",
    sps: "7px",
    spxs: "4px",
  },

  components: {
    Button,
    // Box,
  },
});

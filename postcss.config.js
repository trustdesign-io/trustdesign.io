import postcssGlobalData from "@csstools/postcss-global-data";
import postcssCustomMedia from "postcss-custom-media";

export default {
  plugins: [
    postcssGlobalData({
      files: ["./src/01_foundation/dimension/customMedia.css"],
    }),
    postcssCustomMedia(),
  ],
};

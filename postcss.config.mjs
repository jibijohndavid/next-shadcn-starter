const config = {
  plugins: [
    "@tailwindcss/postcss",
    // Add autoprefixer for better browser compatibility
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "autoprefixer",
            {
              // Configure autoprefixer for production builds
              flexbox: "no-2009",
              grid: "autoplace",
            },
          ],
          [
            "cssnano",
            {
              preset: [
                "default",
                {
                  // Optimize CSS for production
                  discardComments: { removeAll: true },
                  normalizeWhitespace: true,
                  colormin: true,
                  convertValues: true,
                  discardDuplicates: true,
                  discardEmpty: true,
                  mergeRules: true,
                  minifyFontValues: true,
                  minifyParams: true,
                  minifySelectors: true,
                  normalizeCharset: true,
                  normalizeDisplayValues: true,
                  normalizePositions: true,
                  normalizeRepeatStyle: true,
                  normalizeString: true,
                  normalizeTimingFunctions: true,
                  normalizeUnicode: true,
                  normalizeUrl: true,
                  orderedValues: true,
                  reduceIdents: true,
                  reduceInitial: true,
                  reduceTransforms: true,
                  svgo: true,
                  uniqueSelectors: true,
                },
              ],
            },
          ],
        ]
      : []),
  ],
};

export default config;

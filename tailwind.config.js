module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    borderRadius: {
      DEFAULT: "28px",
    },
    fontFamily: {
      header: "Fraunces, serif",
      main: "Barlow, sans-serif",
    },
    screens: {
      xs: "375px",
      md: "580px",
      tall: { raw: "(min-height: 1000px)" },
      grid: "768px",
      lg: "934px",
      xl: "1100px",
    },
    extend: {
      backgroundImage: {
        "header-mobile": "url('../images/mobile/image-header.jpg')",
        "header-desktop": "url('../images/desktop/image-header.jpg')",
        hamburger: "url('../images/icon-hamburger.svg')",
        arrow: "url('../images/icon-arrow-down.svg')",
        transform: "url('../images/mobile/image-transform.jpg')",
        "transform-lg": "url('../images/desktop/image-transform.jpg')",
        "stand-out": "url('../images/mobile/image-stand-out.jpg')",
        "stand-out-lg": "url('../images/desktop/image-stand-out.jpg')",
        "graphic-design": "url('../images/mobile/image-graphic-design.jpg')",
        "graphic-design-lg": "url('../images/desktop/image-graphic-design.jpg')",
        photography: "url('../images/mobile/image-photography.jpg')",
        "photography-lg": "url('../images/desktop/image-photography.jpg')",
        "gallery-cone": "url('../images/mobile/image-gallery-cone.jpg')",
        "gallery-cone-lg": "url('../images/desktop/image-gallery-cone.jpg')",
        "gallery-milkbottle": "url('../images/mobile/image-gallery-milkbottles.jpg')",
        "gallery-milkbottle-lg": "url('../images/desktop/image-gallery-milkbottles.jpg')",
        "gallery-orange": "url('../images/mobile/image-gallery-orange.jpg')",
        "gallery-orange-lg": "url('../images/desktop/image-gallery-orange.jpg')",
        "gallery-sugar": "url('../images/mobile/image-gallery-sugar-cubes.jpg')",
        "gallery-sugar-lg": "url('../images/desktop/image-gallery-sugarcubes.jpg')",
      },
      backgroundPosition: {
        arrow: "center 14.875rem",
        "arrow-tall": "center 16.90875rem",
      },
      colors: {
        background: "hsl(34, 100%, 99%)",
        "background-lg": "hsl(39, 100%, 99%)",
        "background-footer": "hsl(168, 44%, 70%)",
        "header-secondary": "hsl(212, 27%, 19%)",
        "header-testimonial": "hsl(210, 4%, 67%)",
        "graphic-design": "hsl(167, 40%, 24%)",
        photography: "hsl(198, 62%, 26%)",
        "grid-text": "hsl(232, 10%, 55%)",
        "testimonial-text": "hsl(213, 9%, 39%)",
        "footer-logo": "hsl(168, 46%, 31%)",
        "footer-text": "hsl(168, 34%, 41%)",
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
      },
      fontSize: {
        main: [
          "1.125rem",
          {
            letterSpacing: "-0.128571px",
            lineHeight: "1.875rem",
          },
        ],
        "15-25": [
          "0.9375rem",
          {
            lineHeight: "1.5625rem",
          },
        ],
        "20-25": [
          "1.25rem",
          {
            lineHeight: "1.5625rem",
          },
        ],
        header: [
          "2.5rem",
          {
            lineHeight: "3.0625rem",
          },
        ],
        "h1-smaller": [
          "2rem",
          {
            letterSpacing: "5.75px",
            lineHeight: "2.4375rem",
          },
        ],
        "h1-larger": [
          "3.5rem",
          {
            letterSpacing: "8.75px",
            lineHeight: "4.3125rem",
          },
        ],
        "nav-link-lg": [
          "1.125rem",
          {
            lineHeight: "1.5625rem",
          },
        ],
        h2: [
          "2rem",
          {
            letterSpacing: "-0.228571px",
            lineHeight: "2.4375rem",
          },
        ],
        h3: [
          "1.75rem",
          {
            letterSpacing: "-0.2",
            lineHeight: "2.1875rem",
          },
        ],
        "main-smaller": [
          "1rem",
          {
            letterSpacing: "-0.114286px",
            lineHeight: "1.6875rem",
          },
        ],
        "testimonial-name": [
          "1.125rem",
          {
            lineHeight: "1.375rem",
          },
        ],
        "testimonial-role": [
          "0.875rem",
          {
            letterSpacing: "-0.1px",
            lineHeight: "1.5625rem",
          },
        ],
      },
      letterSpacing: {
        "h2-lg": "-0.285714px",
        learn: "1px",
      },
      maxWidth: {
        84.75: "21.1875rem",
        111.25: "27.8125rem",
      },
      spacing: {
        2.25: "0.5625rem",
        4.5: "1.125rem",
        6.75: "1.6875rem",
        7.5: "1.875rem",
        8.25: "2.0625rem",
        9.75: "2.4375rem",
        11.75: "2.9375rem",
        14.5: "3.625rem",
        14.75: "3.6875rem",
        17.25: "4.3125rem",
        18: "4.5rem",
        20.25: "5.0625rem",
        21.5: "5.375rem",
        22: "5.5rem",
        26.25: "6.5625rem",
        39.5: "9.875rem",
        41.25: "10.3125rem",
        42.5: "10.625rem",
        47: "11.75rem",
        78: "19.5rem",
        99.5: "24.875rem",
        111.75: "27.9375rem",
        120: "30rem",
        150: "37.5rem",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};

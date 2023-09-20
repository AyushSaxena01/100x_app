/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral/50":"#f9f9f9",
        "neutral/100":"#F4F4F4",
        "neutral/200":"#E4E4E4",
        "neutral/300":"#D3D3D3",
        "neutral/400":"#A2A2A2",
        "neutral/500":"#737373",
        "neutral/600":"#525252",
        "neutral/700":"#404040",
        "neutral/800":"#262626",
        "neutral/900":"#171717",
        "neutral/950":"#0A0A0A",
        "neutral/1000":"#FFFFFF",
        "twitter-blue-default":"#1D9BF0",
        "twitter-blue-disabled":"#1E5D87",
        "twitter-blue-hover":"#1871CA",
        "blue-wash":"#75BEEF",
        "button-stroke":"#546A7A",
        "searchbar-fill":"#212327",
        "card-fill":"#16181C",
        "success":"#00BE74",
        "error":"#8B141A",
        "stroke":["rgba(29, 155, 240, 0.24)","rgba(255, 255, 255, 0.24)"],
        "neutral/1000":"#000000",
  
      },
      fontFamily:{
        "Inter":['Inter','sans-serif'],
        
      },
      fontSize:{
        "3.5xl":"1.9375rem",
        "2.5xl":"1.625rem",
        "2lg":"1.1875rem",
        "2base":"1.0625rem",
        "m":"0.9375rem",
        "s":"0.8125rem",
        "xxs":"0.625rem"
      },
      lineHeight:{
        "1.2":"1.2"
      },
      width:{
        "80.5":"20.875rem",
        "100":"27.625rem",
      },
      backdropBlur:{
        "23.6px":"23.668209075927734px"
      },
      boxShadow:{
        "btn":"0px 8px 16px 0px rgba(0, 0, 0, 0.25);"
      },
      borderRadius:{
        "12xl":"624.9375rem",
        "8xl":"4.0625rem",
        "4xl":"1.875rem"
      },
      padding:{
        "3.8":"0.9375rem",
        "2.8":"5.8125rem",
      }
    },
  },
  plugins: [],
}


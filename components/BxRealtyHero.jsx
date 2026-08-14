import React from "react";

/**
 * BX Realty — Hero Section
 * Implementado a partir do Figma (node 62:76 — "BX Realty")
 * https://www.figma.com/design/Nsf5sTZVQZUnpNVyxlHeeb/BX-Capital--Website-Covers?node-id=62-76
 *
 * Fonte usada no titulo, descricao e badge: Produkt Regular,
 * carregada via next/font/local em app/layout.js e exposta como
 * a CSS variable --font-produkt.
 */

function BxRealtyLogo({ className }) {
  return (
    <svg
      viewBox="0 0 205 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BX Realty"
    >
      <path d="M53.5276 38.775V33.8079H57.5312V7.50125H53.5276V2.5341H69.8932C77.7972 2.5341 83.1676 5.67675 83.1676 13.0768V13.28C83.1676 18.5514 79.7723 21.9474 75.2126 22.8595L82.6611 33.8077H85.7V38.7749H78.3546L68.6269 23.9239H64.2695V33.8077H68.3723V38.7749L53.5276 38.775ZM69.6908 19.1593C74.3014 19.1593 76.5806 17.1828 76.5806 13.2291V13.0266C76.5806 9.1233 73.9973 7.50125 69.6908 7.50125H64.2695V19.1593H69.6908Z" fill="white"/>
      <path d="M87.3684 25.7993V25.3939C87.3684 17.1829 92.992 11.7084 100.541 11.7084C107.077 11.7084 113.056 15.6112 113.056 25.0896V26.9146H93.6499C93.8535 32.0339 96.3363 34.7202 100.946 34.7202C104.645 34.7202 106.571 33.2504 107.026 30.6652H112.903C112.042 36.2911 107.634 39.2818 100.794 39.2818C92.941 39.2818 87.3684 34.1123 87.3684 25.7993ZM106.975 22.7075C106.62 18.2471 104.392 16.1688 100.541 16.1688C96.8429 16.1688 94.36 18.6527 93.7517 22.7075H106.975Z" fill="white"/>
      <path d="M132.911 35.2268C131.29 37.8119 128.909 39.2818 124.855 39.2818C120.042 39.2818 116.142 36.95 116.142 31.4252C116.142 25.1405 122.07 23.0118 129.568 23.0118H132.81V21.6432C132.81 17.8417 131.493 16.3209 128.047 16.3209C124.957 16.3209 123.438 17.6386 123.083 20.4771H117.206C117.61 14.1413 122.576 11.7084 128.402 11.7084C134.279 11.7084 138.89 13.888 138.89 21.3899V34.2638H141.981V38.775H132.911V35.2268ZM132.81 29.4996V26.8635H129.719C125.109 26.8635 122.221 27.9788 122.221 31.1718C122.221 33.149 123.285 34.8212 126.325 34.8212C130.023 34.8212 132.81 32.9459 132.81 29.4996Z" fill="white"/>
      <path d="M144.105 38.775V34.2638H147.296V4.66288H144.054V0H153.426V34.2636H156.618V38.7749L144.105 38.775Z" fill="white"/>
      <path d="M161.836 31.3749V16.9293H158.289V12.266H161.836V6.43693H167.966V12.266H174.249V16.9293H167.966V30.9185C167.966 33.1993 169.081 34.3654 171.361 34.3654C172.374 34.3654 173.336 34.2133 174.502 33.8079V38.5216C173.285 38.8762 171.968 39.2313 170.195 39.2313C164.47 39.2313 161.836 36.4432 161.836 31.3749Z" fill="white"/>
      <path d="M202.01 16.9293L189.091 48H181.34V43.5396H185.24L188.18 36.4431L179.465 16.9292H176.527V12.2658H189.244V16.9292H185.95L191.372 29.9552L196.489 16.9292H193.144V12.2658H205V16.9292L202.01 16.9293Z" fill="white"/>
      <path d="M40.1988 2.52888H48.9683L42.4659 11.0831L48.9189 19.5732H43.0949L36.643 11.0831L41.6994 4.42991L40.1988 2.52888Z" fill="#F57F29"/>
      <path d="M3.8887 7.53828L0 2.57177H16.8564C24.3537 2.57177 28.7106 5.46047 28.7106 11.9986V12.2C28.7106 15.8495 27.0896 18.6367 22.9857 19.9036C28.0017 20.9675 30.2301 23.603 30.2301 28.468V28.6711C30.2301 35.4107 25.7717 38.8054 17.8199 38.8054H3.80386L3.8887 7.53828ZM15.996 17.8259C20.5044 17.8259 22.2269 16.2542 22.2269 12.5547V12.3533C22.2269 8.90688 20.1998 7.53828 15.9461 7.53828H10.4741V17.8259H15.996ZM17.0096 33.8391C21.5179 33.8391 23.595 31.8629 23.595 28.1634V27.9603C23.595 24.2609 21.568 22.3862 16.5536 22.3862H10.4742V33.8391H17.0096Z" fill="white"/>
      <path d="M35.9731 2.5367H30.1492L36.6516 11.0909L30.1985 19.581H36.0225L42.4745 11.0909L35.9731 2.5367Z" fill="white"/>
    </svg>
  );
}

export default function BxRealtyHero() {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6 py-24"
      style={{
        background: "linear-gradient(-90deg, #994000 0%, #3D1A00 100%)",
      }}
    >
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Wordmark */}
        <BxRealtyLogo className="h-10 w-auto sm:h-12" />

        {/* Subheading + Paragraph */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2
            className="text-[40px] font-normal text-white text-center"
            style={{
              fontFamily: "var(--font-produkt), Arial, sans-serif",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: "120%",
              letterSpacing: "0",
            }}
          >
            Forward Thinking Acquisitions
          </h2>

          <p
            className="max-w-xl text-base text-center"
            style={{
              fontFamily: "var(--font-produkt), Arial, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            A real estate platform that buys undervalued and transitional
            assets, then manages them on-site rather than handing them off.
            That ownership work sharpens how BX Capital underwrites and turns
            up deals for BX Equity.
          </p>
        </div>

        {/* Badge */}
        <div className="mt-10 flex items-center gap-2">
          <span className="h-2 w-2 bg-white" />
          <span
            className="text-xs font-medium uppercase tracking-[0.15em] text-white"
            style={{ fontFamily: "var(--font-produkt), Arial, sans-serif" }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}

import React from "react"

export const SEO = () => {

  const seo = {
    title: "BOSM '23 | The Roar of Resilience",
    description: "Get ready for the ultimate showdown of collegiate sports excellence at the 36th edition of BITS Open Sports Meet (BOSM '23)! Join us from September 22nd to 26th as top college teams from across the nation go head-to-head, showcasing their skills and determination on the grandest stage.",
    image:  "src/images/icon.png",
    url: "https://bitsbosm.org",
  }

  return (
    <>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="robots" content="all" />
    </>
  )
}
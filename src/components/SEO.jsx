import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  type = "WebPage",
  schema = null,
}) {
  const structuredData = schema || {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: "Aura Ibiza",
      url: "https://auraibiza.vip/",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="Aura Ibiza"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;
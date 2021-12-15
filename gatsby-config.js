module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "site"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "persona",
        fieldName: "persona",
        url:
          "https://api-sa-east-1.graphcms.com/v2/ckx63lt1853vw01zah0yvgp35/master"
      }
    }
  ]
};

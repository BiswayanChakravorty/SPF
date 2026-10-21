# Samajik Pahal Foundation (SPF)

Official website project for Samajik Pahal Foundation, an organisation supporting women’s empowerment through handcrafted products such as home décor and tableware.

## Live preview

- Lovable preview: https://samajikpahalfoundation.lovable.app/

## Repository

This repository is intended to hold the website source code and project documentation.

## Deployment and ownership

Before production launch, ensure the foundation has access to the domain registrar, hosting provider, source repository, and relevant analytics accounts. Keep API keys and other secrets out of source control and configure them as environment variables in the deployment provider.

## Search visibility checklist

- Connect the foundation’s production domain to Google Search Console.
- Verify ownership using the HTML meta-tag method or a DNS TXT record.
- Submit the XML sitemap after deployment.
- Check indexing and performance for the homepage and important product/about pages.
- Add accurate page titles, meta descriptions, canonical URLs, and social sharing metadata.

Google Search Console verification values are unique to the foundation’s Google account and must be generated there. Do not commit verification tokens or private credentials to this repository.

## Deployment note

The repository currently needs the website source files synced from the Lovable project. After the source is added, confirm the project framework and build command before configuring Vercel or Zoho Catalyst deployment.

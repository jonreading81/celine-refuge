# Celine Refuge

![Template showcase](docs/media/template-showcase.gif)

## Local Development

Prerequisites:

1. [Create a Wix Headless project](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/create-a-project)
2. [Add the Content Manager app to your project](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/add-apps-to-a-project)
3. Authorize the template with [quick start deployment](https://manage.wix.com/headless-funnel-nextjs/select-platform?templateName=cms) or by [creating an OAuth app](https://dev.wix.com/docs/go-headless/getting-started/setup/authorization/create-an-o-auth-app-for-visitors-and-members)

Set up environment variables to consume Wix Headless APIs:

1. In the template's root folder, create a file for the local environment variables:
   ```sh
   cp .env.template .env.local.
   ```
2. In the new **.env.local** file, paste the OAuth app client ID after `NEXT_PUBLIC_WIX_CLIENT_ID=`.

Run the development server:

1. Run either:

   ```sh
   yarn dev
   ```

   or

   ```sh
   npm i
   npm run dev
   ```

2. Open http://localhost:3000 in your browser to see the template home page.

# Deployment

You can deploy this repository using any platform which supports Next.js Version 13 and [App Router](https://nextjs.org/docs/app).

The repository requires a single environment variable: `NEXT_PUBLIC_WIX_CLIENT_ID`, which should contain a client ID authorizing access to a Wix project's data.

# Learn More

To learn how to customize the template and add more functionality using Wix APIs, see the [Wix JavaScript SDK reference](https://dev.wix.com/api/sdk).

This template is written in [Next.js](https://nextjs.org/docs) 13 using the [Next.js App Router](https://nextjs.org/docs/app).

To learn more about Next.js, see:

- [Next.js documentation](https://nextjs.org/docs): Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.

Additionally, this template uses the following libraries and features:

- [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
- [TanStack Query v4](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Wix client SDK](https://dev.wix.com/api/sdk/introduction)

# Next.js and Wix Integration Guide

See the comprehensive [integration guide](./docs/integration-guide.md) for step-by-step instructions on how to configure Wix as your headless Booking solution using Next.js on Vercel.

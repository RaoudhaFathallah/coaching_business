This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Connecting the backend API locally

The Next.js frontend calls the ASP.NET Core API at `http://localhost:5161/api` by default.
Start the API and the frontend in separate terminals:

```powershell
Set-Location C:\Users\raoud\OneDrive\Documents\coaching_business_api
dotnet run --project Aristide.Api\Aristide.Api.csproj
```

```powershell
Set-Location C:\Users\raoud\OneDrive\Documents\coaching_business
Copy-Item .env.example .env.local
npm run dev
```

The API uses CORS to allow the local Next.js origins on ports 3000 and 3001. Update
`Cors:AllowedOrigins` in the API configuration if the frontend uses a different origin.
Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` when the API is hosted elsewhere, then
restart Next.js.

Pricing, FAQ, contact, and booking screens now use API data. Booking requests remain
pending until the coach confirms them. The current availability endpoint provides
suggested slots; it is not connected to a finalized calendar provider.

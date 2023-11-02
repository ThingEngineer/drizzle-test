# Drizzle Test

Everything you need to get started with Drizzle and SvelteKit using [Vercel Postgres Storage](https://vercel.com/docs/storage/vercel-postgres).

## Building & Setup

Once you've cloned this project, install dependencies with `npm install` (or `pnpm install` or `yarn` or `bun`), start a development server:

```bash
npm run dev
```

If you cloned this project, create a new repository on your GitHub and push this repository to it. (If you forked this project, you can skip this step.)

```bash
git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ThingEngineer/delme.git
git push -u origin main
```

Then run the following commands to link your local project with a Vercel project using the [Vercel CLI](https://vercel.com/docs/cli).

```bash
vercel login
vercel link
vercel git connect
```

Once Vercel and GitHub are connected make another commit to deploy your app. Verify by navigating to your project in the Vercel dashboard.

## Create a Vercel Database

On the Vercel dashboard overview, select your project. Once you're in the project, click on the Storage tab. Click on the "Create" button next to the Postgres option.

A modal window will open asking you to name your database and select your region.
Then another will open asking you which environment variables you want to use as well as your env prefix. You can leave these defaults and click "Create".

Pull the environment variables to your local machine with the following command.

```bash
vercel env pull .env.development.local
```

You should now have a .env.development.local file in your project’s root directory containing all the environment variables you just created.

Run `vercel dev` to test your development environment. You should see the app running on http://localhost:3000.

## Define a schema

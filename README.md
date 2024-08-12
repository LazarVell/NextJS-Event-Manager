Welcome to my NextJS event management project!

## Getting Started

First, make sure you open the program in VSCode, or run the terminal in the folder where you cloned/downloaded this project. Then type in "npm i",

Second, run the development server:

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

make sure that http://localhost:3000 is open for NextJS to use. Otherwise the app might act unpredictably.

Once your project is up and running, you will need to register in order to use the full functionality of the app.

Until you register, you will only be able to see existing events.

The app will only accept unique E-mails for registration.

Once registered, you can login, and start editing, removing or adding events, and signing up for them!

There is currently an issue with signing up, once you sign up, the page needs to be refreshed for the effects to be seen. I understand the nature of this issue but I did not have the time to work on it before the deadline due to the fact it was discovered very late.

Also, while it is not specifically requested, I would like to implement an "unsub" logic to enable users to remove themselves from events as well as signing up.

For authentication, NextAuth is used, which implements JWT.

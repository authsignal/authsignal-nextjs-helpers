# Authsignal Next.js helpers

## Installation

Add the `@authsignal/nextjs-helpers` package to your `package.json`.

### npm

```bash
npm install @authsignal/nextjs-helpers
```

### yarn

```bash
yarn add @authsignal/nextjs-helpers
```

## Usage

Wrap your top level app component with `AuthsignalProvider`:

```tsx
import {AuthsignalProvider} from "@authsignal/nextjs-helpers";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthsignalProvider>
      <Component {...pageProps} />
    </AuthsignalProvider>
  );
}
```

Then you can use the `useAuthsignal` hook to access the Authsignal browser client:

```tsx
import {useAuthsignal} from "@authsignal/nextjs-helpers";

function MyPage() {
  const authsignalClient = useAuthsignal();
}
```

Learn more about the Authsignal browser client in the [API documentation](https://docs.authsignal.com/api/browser-api).

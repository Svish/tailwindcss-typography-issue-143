import "../styles/tailwind.css";

import type { ReactElement } from "react";
import type { AppProps } from "next/app";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

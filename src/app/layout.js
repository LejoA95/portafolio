import theme from "./themes/theme";
import { inter } from "./themes/fonts";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

export const metadata = {
  title: "Desarrollador web",
  description: "Desarrollador web, diseñador e ilustrador 3D",
  icons:{
    icon:['/favicon.ico?=4'],
    aple:['/apple-touch-icon.png?v=4'],
    shorcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import theme from "./themes/theme";
import { inter } from "./themes/fonts";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "Desarrollador web",
  description: "Desarrollador web, diseñador e ilustrador 3D",
  icons: {
    icon: ["/favicon.ico?=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  charset: "UTF-8",
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}

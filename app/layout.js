import { Rubik } from "next/font/google";
import "./globals.css";
const rubik = Rubik({
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className}  antialiased`}>{children}</body>
    </html>
  );
}

import "../style.css";

export const metadata = {
  title: "Portofolio Prestasi Woodball",
  description: "Portofolio prestasi Reifan Syahputra Ramadhan sebagai atlet Woodball.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

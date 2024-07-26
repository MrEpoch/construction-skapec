import Header from "@/components/shared/Header";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isWhite />
      {children}
    </>
  );
}

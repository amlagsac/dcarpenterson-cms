import Container from "@/components/layout/Container";

export default function UnauthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="flex justify-center items-center min-h-screen min-w-screen p-4 bg-[#F5F5F5]">
      {children}
    </Container>
  );
}

import DesktopSidebar from "./components/DesktopSidebar";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F1F5F9]">
      <DesktopSidebar />
      <div className="w-full max-w-sm">{children}</div>
    </main>
  );
}

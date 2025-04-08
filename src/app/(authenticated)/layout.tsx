import DesktopSidebar from "./components/DesktopSidebar";
import UserDropdown from "./components/UserDropdown";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F1F5F9]">
      <DesktopSidebar />
      <div className="w-full max-w-sm">{children}</div>
      <header className="fixed top-0 left-0 w-full h-16 px-4 bg-white border-b border-gray-200 flex justify-end items-center">
        <UserDropdown />
      </header>
    </main>
  );
}

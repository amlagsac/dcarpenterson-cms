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
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="fixed top-0 left-0 w-full h-16 px-4 bg-white border-b border-gray-200 flex justify-end items-center">
          <UserDropdown />
        </header>
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
          {children}
        </main>
      </div>
    </main>
  );
}

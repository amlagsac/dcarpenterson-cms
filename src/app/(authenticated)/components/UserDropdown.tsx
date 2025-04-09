import DropdownMenu from "@/components/dropdown/DropdownMenu";
import { auth } from "@/lib/auth";

export default async function UserDropdown() {
  const session = await auth();
  const user = session?.user;

  if (!user) return null;

  return <DropdownMenu user={user} />;
}

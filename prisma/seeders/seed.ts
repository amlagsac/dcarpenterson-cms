import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      {
        name: "superadmin",
        description: "This role is for the super admin user.",
      },
      {
        name: "manager",
        description: "This role is for the manager user.",
      },
      {
        name: "staff",
        description: "This role is for the staff user.",
      },
      {
        name: "guest",
        description: "This role is for the guest user.",
      },
    ],
  });
  const adminHashedPassword = await bcrypt.hash("admin1234", 10);
  const guestHashedPassword = await bcrypt.hash("guest1234", 10);
  await prisma.user.createMany({
    data: [
      {
        firstName: "Super",
        lastName: "Admin",
        email: "super.admin@dcarpenterson.com",
        password: adminHashedPassword,
        roleId: 1,
      },
      {
        firstName: "Guest",
        lastName: "User",
        email: "guest.user@dcarpenterson.com",
        password: guestHashedPassword,
        roleId: 4,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

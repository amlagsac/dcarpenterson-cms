export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
};

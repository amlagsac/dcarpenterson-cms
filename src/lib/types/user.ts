export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
};

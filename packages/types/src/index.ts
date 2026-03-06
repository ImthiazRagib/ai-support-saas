export type UserRole = 'owner' | 'admin' | 'member';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  orgId: string;
}

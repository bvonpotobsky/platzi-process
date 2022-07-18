import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'bvonpotobsky',
  role: ROLES.ADMIN,
};

export const checkUserRole = (user: User, role: ROLES) => {
  return user.role === role;
};
const isAdmin = checkUserRole(currentUser, ROLES.ADMIN);

// ->

export const checkUserRoleV2 = (...roles: string[]) => {
  return (user: User) => {
    return roles.includes(currentUser.role);
  };
};

const isAdminV2 = checkUserRoleV2(ROLES.ADMIN);

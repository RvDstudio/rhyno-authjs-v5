export interface Session {
  userId: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  expires: string; // Add this line
  // Add any other relevant fields
}

export interface User {
  isAdmin: boolean;
}

export interface MenuItem {
  title: string;
  notification?: number;
  icon: JSX.Element;
  gap?: boolean;
  path: string;
  isAdmin?: boolean; // Added isAdmin property
}

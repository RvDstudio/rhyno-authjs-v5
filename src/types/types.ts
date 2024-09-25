export interface Session {
  userId: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  expires: string; // Add this line
  // Add any other relevant fields
}
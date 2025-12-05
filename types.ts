export interface Pioneer {
  id: number;
  name: string;
  year: string;
  role: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface StatData {
  year: string;
  percentage: number;
}

export interface TeamMember {
  lastName: string;
  firstName: string;
  role?: string; // Optional, defaults to Membre
  email: string;
  isLead?: boolean;
  formation?: string;
}
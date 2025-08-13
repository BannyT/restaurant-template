export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;
    photoUrl?: string;
    rank?: number;
    available?: boolean;
  }
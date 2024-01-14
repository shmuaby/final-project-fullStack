export interface organizations {
  id: string;
  name: string;
  description: string;
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
  };
  phone: {
    number: number;
    title: string;
  };
  email: string;
  website: string;
}

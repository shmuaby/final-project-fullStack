export interface volunteers {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  description: string;
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    zipCode: number;
  };
  age: number;
  phone: number;
  email: string;
  organization_id: string[];
  type: ["admin", "volunteerUser", "organizationUser"];
}

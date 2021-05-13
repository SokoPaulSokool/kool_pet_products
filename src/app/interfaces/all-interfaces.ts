export interface Customer {
  name: string;
  firstAddress: string;
  secondAddress: string;
  postCode: string;
  phoneNumber?: string;
  email: string;
  openingTime: OpeningTime;
}
export interface OpeningTime {
  mon: string;
  tue: string;
  wed: string;
  thur: string;
  fri: string;
  sat: string;
  sun: string;
}

export interface CustomerState {
  allCutomers: Customer[];
  selectedCustomer?: Customer| null;
}

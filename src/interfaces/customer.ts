    export type Customer = {
    customerId: number;
    taxIdentificationNumber:string;
    companyName: string;
    legalAddress: string;
    postalCode: string;
    country: string;
    email: string;
    password: string;
    active: boolean;
    activationCode: string;
    activationCodeCreationTime: string;
    deliveryAddresses: any; //DeliveryAddress[]


  }
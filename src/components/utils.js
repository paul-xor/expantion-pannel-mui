export const EQUIPMENT_TYPE = [
  {
    label: "Type",
    options: [
      { value: "1 Ton Van", label: "1 Ton Van" },
      { value: "3 Ton Van", label: "3 Ton Van" },
      { value: "4 Ton Van", label: "4 Ton Van" },
      { value: "5 Ton Van", label: "5 Ton Van" },
      { value: "Single Axle Crane", label: "Single Axle Crane" },
      { value: "Tractor Trailers", label: "Tractor Trailers" },
      { value: "Tandem Axle Van", label: "andem Axle Van" },
      { value: "Tandem Axle Flat", label: "Tandem Axle Flat" },
      { value: "Tandem Axle Crane", label: "Tandem Axle Crane" },
      { value: "Refridgerated Van", label: "Refridgerated Van" },
      { value: "China Top", label: "China Top" },
      { value: "1 Ton Flat", label: "1 Ton Flat" }
    ]
  }
];

export const MOCK_DISPATCHES = [
  {
    customerId: "5e4c39828793b8ab5b87551b",
    createdById: "5f0235b3e5faf1001b4f0214",
    callerCompany: "ANDREW SHERET LIMITED",
    callerName: "Christina",
    callerPhone: "6403867744",
    billingAccount: "10822",
    billingRecipient: "ALLIANCE CONCRETE PUMPS INC.",
    origin: {
      address: "West 20th Avenue",
      companyName: "RED Company",
      city: "Vancouver",
      postalCode: "V5Z 1X9",
      lat: "49.2534664",
      lng: "-123.1191753"
    },
    destination: {
      address: "123 Street",
      companyName: "RED-MAGENTO",
      city: "Surrey",
      postalCode: "V3X 3H7",
      lat: "49.1071771",
      lng: "-122.883379",
      serviceType: "REGULAR"
    },
    pupNotes: "some pupNotes - mock 1",
    delNotes: "some delNotes - mock 1",
    warningNotes: "",
    packages: [],
    packageSummary: {
      totalPieces: "12",
      totalWeight: "8.104",
      weightUnit: "LB",
      cbf: "0.00007535"
    },
    services: {},
    assessorials: [],
    manualCharges: [],
    orderStatus: "ON_DISPATCH_BOARD",
    summary: {},
    shipmentId: "300"
  },
  {
    customerId: "5e4c39858793b8ab5b875617",
    createdById: "5f0235b3e5faf1001b4f0214",
    callerCompany: "Toy Land Company",
    callerName: "Amy",
    callerPhone: "6208765432",
    billingAccount: "16416",
    billingRecipient: "BUCKLAND CUSTOMS BROKERS LIMITED",
    origin: {
      address: "Granville Street",
      companyName: "REDISH Company",
      city: "Vancouver",
      postalCode: "V6M 3C5",
      lat: "49.2347032",
      lng: "-123.13916"
    },
    destination: {
      address: "Southeast Marine Drive",
      companyName: "HIFIVE CHIKEN - TEST",
      city: "Vancouver",
      postalCode: "V5X 3L6",
      lat: "49.211306",
      lng: "-123.1018814",
      serviceType: "SAMEDAY"
    },
    pupNotes: "some pupNotes - mock 2",
    delNotes: "some delNotes - mock 2",
    warningNotes: "",
    packages: [],
    packageSummary: {
      totalPieces: "1",
      totalWeight: "2.204",
      weightUnit: "KG",
      cbf: "0.00003531"
    },
    services: {},
    assessorials: [],
    manualCharges: [],
    orderStatus: "ON_DISPATCH_BOARD",
    summary: {},
    shipmentId: "301"
  }
];

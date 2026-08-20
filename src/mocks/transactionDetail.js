export const transactionDetail = {
  id: '#JT-20260715-01',
  status: 'pending',
  items: [
    {
      id: 1,
      name: 'Bangkok Milk Tablet',
      quantity: 5,
      price: 25000,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
      status: 'purchased'
    },
    {
      id: 2,
      name: 'Lay\'s Truffle Thai',
      quantity: 2,
      price: 35000,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvJt5_APDLVd-pTFVGzX4sToLNQOL2zJjRVbao9vBy8Q2fRBS_PPGSac3NVSLXXlUMPeghOCxxid3CECWyusob4qToORnaz4_XQQIb9MI8XVzk4cwKJ806-3UzKrrrm_SSvtkAt6r5BV-4q0Himx5c6uHvIgejvxD1k_sL3GOXFUdXaseioOwlPwRqf1VrBLBLzf1mtY_rlM55Moey5ivOnsVanvHTF3IbykrTpaUR4rqApGItYpJDuINAu',
      status: 'purchased'
    }
  ],
  subtotal: 195000,
  fee: 25000,
  packing: 10000,
  shipping: 18000,
  total: 248000
};

export const steps = [
  { id: 1, label: 'order_received', status: 'completed' },
  { id: 2, label: 'processed', status: 'completed' },
  { id: 3, label: 'items_purchased', status: 'completed' },
  { id: 4, label: 'payment', status: 'active' },
  { id: 5, label: 'paid', status: 'pending' }
];

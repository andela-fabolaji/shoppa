export const roles = [
  {
    _id: 'ADMIN',
    description: 'Level 4 user - Manages the entire system',
    permissions: [
      'APPROVE_VENDOR',
      'SUSPEND_VENDOR',
      'VIEW_VENDOR_DETAILS',
      'VIEW_USER_DETAILS',
      'SUSPEND_USER',
      'CREATE_SHOP_ADMIN',
      'DISABLE_SHOP_ADMIN',
      'CREATE_PRODUCT',
      'UPDATE_PRODUCT',
      'DELETE_PRODUCT',
      'ORDER_PRODUCT',
      'CANCEL_ORDER'
    ],
    timestamp: {}
  },
  {
    _id: 'BUYER',
    description: 'Level 1 user - Has basic buyer capabilities',
    permissions: [
      'ORDER_PRODUCT',
      'CANCEL_ORDER'
    ],
    timestamp: {}
  }
];

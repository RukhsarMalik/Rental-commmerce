
const product = {
    name: 'vehicle',
    title: 'Vehicle',
    type: 'document',
    fields: [
      { name: 'id', 
        title: 'ID', 
        type: 'string' },

      { name: 'name', 
        title: 'Name',
         type: 'string' },

      { name: 'category', 
        title: 'Category', 
        type: 'string' },

      { name: 'price',
         title: 'Price',
          type: 'number' },

      { name: 'stock',
         title: 'Stock', 
         type: 'number' },

      { name: 'features',
         title: 'Features',
          type: 'array', of: [{ type: 'string' }] },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },

      {
         name: 'image', 
         title: 'Image', 
         type: 'url', 
         description: 'Image URL of the Vehicle'
        },

    ],
  };
  
  
  

  const customer = {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      { name: 'customerId',
        title: 'ID',
        type: 'string' 
      },

      { 
        name: 'name',
        title: 'Name',
        type: 'string' 
      },
      
      { name: 'email', 
        title: 'Email', 
        type: 'string' 
      },
      { name: 'phone', 
        title: 'Phone', 
        type: 'string' },

      { name: 'address', 
        title: 'Address', 
        type: 'string' },

        
    ],
  };
  
 

  const order = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'orderId', 
        title: 'Order ID', 
        type: 'string' },

      { name: 'customerId', 
        title: 'Customer', 
        type: 'reference', to: [{ type: 'customer' }] },

      { name: 'vehicleDetails', 
        title: 'Vehicle Details', 
        type: 'array', of: [{ type: 'reference', to: [{ type: 'vehicle' }] }] },

      { name: 'status', 
        title: 'Status', 
        type: 'string' },

      { name: 'totalprice', 
        title: 'Total Price', 
        type: 'number' },

      { name: 'timestamp',
        title: 'Timestamp', 
        type: 'datetime' },

        { name: 'driverId',  
          title: 'Driver', 
          type: 'reference', to: [{ type: 'driver' }] },  
    ],
  };
  

 
  const payment = {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      { name: 'paymentId', 
        title: 'Payment ID', 
        type: 'string' },

      { name: 'orderId', 
        title: 'Order', 
        type: 'reference', to: [{ type: 'order' }] },

      { name: 'amount', 
        title: 'Amount', 
        type: 'number' },

      { name: 'paymentMethod',
        title: 'Payment Method', 
        type: 'string' },

      { name: 'status', 
        title: 'Status', 
        type: 'string' },

        { name: 'transactionDate', 
          title: 'Transaction Date', 
          type: 'datetime' },
    ],
  };
  


  const shipment = {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      { name: 'shipmentId',
         title: 'Shipment ID', 
         type: 'string' },

      { name: 'orderId', 
        title: 'Order', 
        type: 'reference', to: [{ type: 'order' }] },

      { name: 'deliveryZone', 
        title: 'Delivery Zone', 
        type: 'string' },

      { name: 'status', 
        title: 'Status', 
        type: 'string' },

      { name: 'deliveryDate', 
        title: 'Delivery Date', 
        type: 'datetime' },

      { name: 'pickupDate',
         title: 'Pickup Date', 
         type: 'datetime' },

      { name: 'assignedDrivers', 
        title: 'Assigned Drivers', 
        type: 'array', of: [{ type: 'reference', to: [{ type: 'driver' }] }] },
    ],
  };
  

  

  const deliveryZone = {
    name: 'deliveryZone',
    title: 'Delivery Zone',
    type: 'document',
    fields: [
      { name: 'zoneId', 
        title: 'Zone ID', 
        type: 'string' }, 

      { name: 'zoneName',
        title: 'Zone Name', 
        type: 'string' },

      { name: 'coverageArea', 
        title: 'Coverage Area', 
        type: 'string' },

      { name: 'assignedDrivers', 
        title: 'Assigned Drivers', 
        type: 'array', of: [{ type: 'reference', to: [{ type: 'driver' }] }] },

      { name: 'assignedVehicles', 
        title: 'Assigned Vehicles', 
        type: 'array', of: [{ type: 'reference', to: [{ type: 'vehicle' }] }] }, 

     
        
    ],
  };

  
  

 const driver = {
  name: 'driver',
  title: 'Driver',
  type: 'document',
  fields: [
    { name: 'driverId', 
      title: 'Driver ID', 
      type: 'string' },

    { 
      name: 'contactInfo', 
      title: 'Contact Info', 
      type: 'object', 
      fields: [
        { name: 'name', 
          title: 'Name', 
          type: 'string' }, 

        { name: 'address', 
          title: 'Address', 
          type: 'string' }, 

        { name: 'phone', 
          title: 'Phone Number', 
          type: 'string' },
          
        { name: 'email', 
          title: 'Email', 
          type: 'string' }, 
      ]
    },
    { name: 'licenseInfo', 
      title: 'License Info', 
      type: 'string' }, 

    { name: 'ratings', 
      title: 'Ratings', 
      type: 'number', 
      validation: Rule => Rule.min(0).max(5) },

    { name: 'assignedOrders', 
      title: 'Assigned Orders', 
      type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }] },
  ],
};




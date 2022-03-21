
export default {
  name: 'dropDown',
  title: 'Drop Down List',
  type: 'object',
  fields: [
    {
      title: 'List Items',
      name: 'listItems',
      type: 'string',
      options: {
        list: [
          {title: 'pricedItem', value: 'pricedItem'},
          {title: 'moneyAmount', value: 'moneyAmount'},
        ],
      },
    },
    
    // {
    //   name: 'pricedObjects',
    //   type: 'array',
    //   title: 'Priced Objects',
    //   of: [ { title: 'Object',type: 'pricedItems',} ],
    // },
  ],
 
};

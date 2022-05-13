
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
          {title: 'pricedItems', value: 'pricedItems'},
          {title: 'moneyAmounts', value: 'moneyAmounts'},
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

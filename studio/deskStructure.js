import S from '@sanity/desk-tool/structure-builder'
import { MdPalette, MdSettings,MdPublic, MdWeb,MdSearch, MdSell, MdShare } from "react-icons/md";

// We filter document types defined in structure to prevent
// them from being listed twice
// const hiddenDocTypes = (item) => !['page', 'route', 'siteSettings'].includes(item.getId())

const hiddenVals = [
  'siteSEO',
  'colourPalette',
  'siteFooter',
  'siteNavigation',
  'page',
  'route',
  'pricedItems',
  'siteFont',
  'socialMedia',
]

const hiddenDocTypes = (item) => !hiddenVals.includes(item.getId())

export default () =>

S.list()
  .title('Content')
  .items([
    
    // GLOBALS //
    S.listItem()
    .title('Settings')
    .icon(MdSettings)
      .child(
        S.list()
        .title('Settings')
        .items([
          // SEO //
          S.listItem()
          .icon(MdSearch)
          .title('SEO')
          .schemaType('siteSEO')
          .child(
            S.document()
            .schemaType('siteSEO')
            .documentId('siteSEO')
          ),

          // COLOUR PALETTE //
          S.listItem()
          .icon(MdPalette)
          .title('Palette')
          .schemaType('colourPalette')
          .child(S.documentTypeList('colourPalette').title('Colour')),
          
           // COLOUR PALETTE //
          S.documentTypeListItem('route').title('Routes'),
           
          S.listItem()
          .icon(MdShare)
          .title('Social Media')
          .schemaType('socialMedia')
          .child(S.documentTypeList('socialMedia').title('Social Channel')),
          
          
        ])
      
    ),

    S.divider(),

     // GLOBALS //
     S.listItem()
     .title('Global content')
     .icon(MdPublic)
       .child(
         S.list()
         .title('Globals')
         .items([
           // Footer //
           S.listItem()
           .title('Footer')
           .icon(MdWeb)
           .child(
             S.document()
             .schemaType('siteFooter')
             .documentId('siteFooter')
           ),
           // Navigation //
           S.listItem()
           .title('Navigation')
           .icon(MdWeb)
           .child(
             S.document()
             .schemaType('siteNavigation')
             .documentId('siteNavigation')
           ),
         ])
       
     ),
    // // PAGES //
    // S.listItem()
    //  .title('Reusable content')
    //  .icon(MdPublic)
    //    .child(
    //     S.documentTypeList('shareButton').title('Share Button')
    //  ),

    // PAGES //
    S.listItem()
    .title('Pages')
    .icon(MdWeb)
    .schemaType('page')
    .child(
      S.documentTypeList('page').title('Page')
    ),

    // PRICED ITEMS //
    S.listItem()
    .title('Priced items')
    .icon(MdSell)
    .schemaType('pricedItems')
    .child(
      S.documentTypeList('pricedItems').title('Item')
    ),


    // S.listItem()
    // .icon(MdSearch)
    // .title('siteFont')
    // .schemaType('siteFont')
    // .child(
    //   S.document()
    //   .schemaType('siteFont')
    //   .documentId('siteFont')
    // ),
    


    // ALL OTHERS //
    ...S.documentTypeListItems().filter(hiddenDocTypes)
    
  ])


//   export default () =>
// S.list()
//   .title('Site')
//   .items([
//     S.documentListItem().id('global-config').schemaType('site-settings').title('Site settings'),
//     S.divider(),
//     S.documentTypeListItem('page').title('Pages'),
//     S.documentTypeListItem('route').title('Routes'),
//     ...S.documentTypeListItems().filter(hiddenDocTypes),
//   ])

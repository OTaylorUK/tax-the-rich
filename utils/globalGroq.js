// Must keep '_type' to use in later function to organise data into groups
// add to btn below when testing 'TYPEEEEE': _type,

const buttonGroq = `
...,

_type == 'button' => {
  'intLink': route->slug.current,
  'link': link,
  buttonAction == 'share-page' => {
    'shareLinks': *[_type in ["socialMedia"]]{
      name,
      button{
        ...,
        'link': link,
        portableButton[]{
          ...,
          asset->
        },
      }
    }
  },
  portableButton[]{
  ...,
 
  asset->
  },
 },

 

_type == 'buttons' => {
  'test': _key,
  buttons[]{
    ...,
    'intLink': route->slug.current,'link': link,
    portableButton[]{
      ...,
      asset->
    },
  },
}
`

export const getFooter = `
*[_type in ["siteFooter"]]
{_type,
  credit{
    ...,
    text[] {
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @->slug,
        }
      }
    },
  },
  middle{
    button{
      ${buttonGroq}
     },
    social[]->{
      ...,
      button{
       ${buttonGroq}
      }
    }
  }
}
`

export const  getPalette = `
  *[_type in ["colourPalette"]]
  {
    _type,
    name,
    'dark': darkThemeHex,
    'light': lightThemeHex,
  }
`

export const  getSEO = `
  *[_type in ["siteSEO"]]
  {...}
`

export const  getNav = `
  *[_type in ["siteNavigation"]]
  {
    _type,
    logo{
      ${buttonGroq}
    },
    button{
      ${buttonGroq}
    },
    menu[]{
      ${buttonGroq}
    }
  }
`

export const  getRoutes = `
  *[_type in ["page"]]
  {_type,slug,title}
`


export const getCurrentPage = (slug = '404') => {
  return `
  *[_type == "page" && slug.current == "${slug}"]
  {content,_type}
  `
}

export const getPageContent = (slug = '404') => {
  return `
  *[_type == "page" && slug.current == "${slug}"]
  {
    ...,
    'SEO': {
      title,
      'url': slug.current,
      description,
      openGraphImage{
        asset->{
          url,
          mimeType,
        }
      }
    },
    content[] {
      ${buttonGroq},
 
      Header[] {
        ${buttonGroq}
      },

      textContent[] {
        ...,
        ${buttonGroq},
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @->slug,
          }
        }
      },
      buttons[]{
        ${buttonGroq}
       
      },
      social[]->{
        ...,
        button{
         ${buttonGroq}
        }
      }

    }
    
  }


 
  `
}

// export const getCurrentPage = (slug = 'what-you-can-do') => {
//   return `
//   *[slug.current == "${slug}"]
//   {content,_type}
//   `
// }


// export const getCurrentPage = (slug = 'what-you-can-do') => {
//   return `
//   *[_type == ["page"] && slug.current == "${slug}"]
//   {content,_type}
//   `

// export const  getRoutes = `
//   *[_type in ["route"]]
//   {_type,page,slug}
// `

// Must keep '_type' to use in later function to organise data into groups


const buttonGroq = `...,
'intLink': route->slug.current,
'link': link,
portableButton[]{
  ...,
  asset->
},`

export const getFooter = `
*[_type in ["siteFooter"]]
{_type,middle,
  lhs[]{
    ${buttonGroq}
  },
  rhs[]{
    ${buttonGroq}
  },
  middle{
    ...,
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
  {hex,name,_type}
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
    content[] {
      ...,
      buttons[] {
        ${buttonGroq}
      },
      
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

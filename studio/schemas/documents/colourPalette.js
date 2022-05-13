import React from 'react'

export default {
  type: 'document',
  name: 'colourPalette',
  title: 'Colour Palette',
  
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'hex',
      title: 'Color',
      type: 'colorPicker'
    },
    {
      name: 'darkThemeHex',
      title: 'Dark theme - Color',
      type: 'string',
      initialValue: '#',
      validation: Rule => [
        Rule.min(7).error('Too few'),
        Rule.max(7).error('Too much'),
      ],
    },
    {
      name: 'lightThemeHex',
      title: 'Light theme - Color',
      type: 'string',
      initialValue: '#',
      validation: Rule => [
        Rule.min(7).error('Too few'),
        Rule.max(7).error('Too much'),
      ],
    },
   
  ],
  preview: {
    select: {
      title: 'name',
      hex: 'hex',
      darkThemeHex: 'darkThemeHex',
      lightThemeHex: 'lightThemeHex',
    },
    prepare({ title, hex, darkThemeHex, lightThemeHex }) {
      const inv = (hex) => '#' + hex.match(/[a-f0-9]{2}/ig).map(e => (255 - parseInt(e, 16) | 0).toString(16).replace(/^([a-f0-9])$/, '0$1')).join('')

      let media,lightTheme,darkTheme;
      if (lightThemeHex) {
        const lightInverse = inv(lightThemeHex);
      
        const lightStyles = {
          backgroundColor: lightThemeHex,
          flex: '1',
          color: lightInverse,
          display: 'flex',
          justifyContent:'center',
          alignItems:'center'
        };


        lightTheme = <div style={lightStyles}>L</div>;
        media = lightTheme;
      }

      if (darkThemeHex) {
        const darkInverse = inv(darkThemeHex);

        const darkStyles = {
          backgroundColor: darkThemeHex,
          flex: '1',
          color: darkInverse,
          display: 'flex',
          justifyContent:'center',
          alignItems:'center'
        };

        darkTheme = <div style={darkStyles}>D</div>;
        media += darkTheme;
      }

      const styles = {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexFlow:'row'

      };
      return {
        title: `${title}`,
        subtitle: `light: ${lightThemeHex} - dark: ${darkThemeHex}`,
        media: <span style={styles}>{darkTheme}{lightTheme}</span>
      };
    },
  },
}

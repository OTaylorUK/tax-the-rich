// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import colourPalette from './documents/colourPalette';
import siteFooter from './documents/siteFooter';
import siteNavigation from './documents/siteNavigation';
import siteSEO from './documents/siteSEO';
import pricedItems from './documents/pricedItems';
import socialMedia from './documents/socialMedia';
import moneyAmount from './documents/moneyAmount';


// import siteSetting from './documents/siteSetting';

// import siteFont from './documents/siteFont';

// Object types
// import colourPalette from './objects/colourPalette';

import cta from './objects/cta';
import twitterCard from './objects/twitterCard';
import generalCard from './objects/generalCard';
import colour from './objects/colour';
import footer from './objects/footer';
import quote from './objects/quote';
import button from './objects/button';
import buttons from './objects/buttons';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import portableHeader from './objects/portableHeader';
import portableButton from './objects/portableButton';
import richList from './objects/richList';
import generalText from './objects/generalText';
import textAlign from './objects/textAlign';
import lineBreak from './objects/lineBreak';
import blockVisual from './objects/blockVisual';


import simplePortableText from './objects/simplePortableText';
import dropDown from './objects/dropDown';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import visualiser from './objects/visualiser';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  
  types: schemaTypes.concat([
    cta,
    twitterCard,
    generalCard,
    colour,
    footer,
    quote,
    button,
    buttons,
    embedHTML,
    figure,
    hero,
    visualiser,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    portableHeader,
    portableButton,
    richList,
    generalText,
    textAlign,
    lineBreak,
    blockVisual,
    route,
    simplePortableText,
    dropDown,
    colourPalette,
    siteFooter,
    siteNavigation,
    siteSEO,
    textSection,
    pricedItems,
    socialMedia,
    moneyAmount,
    // siteSetting
  ]),
});

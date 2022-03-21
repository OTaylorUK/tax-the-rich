
export const formatGlobalSettings = (obj) => {
  for (let [key, result] of Object.entries(obj)) {
    console.log('1111!!!');
    console.log(result);

    if (!result) continue;
    
    console.log('222222222!!!');

    if (!result?.[0]) continue;
    console.log('fwefwefewfwef');
    let type = result?.[0]._type;

    let returnContent = result;

    // handle same type value -- diff from routes
    if (type === 'page') {
      if (result.length === 1) {
        // if page content will only have one array item
        type = 'pageContent'

        // grab content to avoid to many nested arr objs
        // returnContent = result?.[0]?.content;
      }
    }
    let newObj = { name: type, value: returnContent }
    obj[key] = newObj;
  }

  return obj;
}

export const capitalizeString = (str) => {
  if (typeof str !== 'string' || !str) return str

  return str.charAt(0).toUpperCase() + str.slice(1)
}
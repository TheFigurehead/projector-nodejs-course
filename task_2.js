const invert = (obj) => {
    
    const inverted = {}

    Object.keys(obj).forEach( key => {
        inverted[ obj[key] ] = key
    } )

    return inverted;

}
 
console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 })) // { 'some': 'a', 'object': 'b', '1': 'c' }
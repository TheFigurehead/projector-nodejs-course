const groupBy = (array, func) => {
    
    const result = {}

    array.forEach(item => {

        let value = func(item)

        if( !Array.isArray( result[value]) ){
            result[value] = []
        }
        
        result[value].push(item)

    })

    return result;

}
 
 console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)) // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
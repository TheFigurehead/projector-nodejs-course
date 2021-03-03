const checkParentheses = (str) => {

    const counter = {
        parentheses: [], // ()
        square: [], // []
        braces: [], // {}
        angle: [] // <>
    }

    let response = true

    Array.from(str).forEach( symbol => {
        
        switch( symbol ){
            case '(':
            case ')':
                counter.parentheses.push( symbol )
                break;
            case '[':
            case ']':
                counter.square.push( symbol )
                break;
            case '{':
            case '}':
                counter.braces.push( symbol )
                break;
            case '<':
            case '>':
                counter.angle.push( symbol )
                break;
        }

    });

    Object.keys(counter).forEach( key => {

        if( counter[key].length == 0 ) return true

        let sum = 0;

        counter[key].forEach( item => {

            switch( item ){
                case '(':
                case '[':
                case '{':
                case '<':
                    sum += 1
                    break;
                case ')':
                case ']':
                case '}':
                case '>':
                    sum -= 1
                    break;
            }

            if( sum < 0 ) response = false

        })

        if( sum != 0 ) response = false

    } )

    return response

}
 
console.log(checkParentheses('--()--')) // true
console.log(checkParentheses('-a]--[')) // false
console.log(checkParentheses('dsa{vsfs{ad')) // false
console.log(checkParentheses('j78(g5b]uyg')) // false
console.log(checkParentheses(',m{i987y}hj')) // true
console.log(checkParentheses('dsa[3ed---:]::')) // true
function isUpperCase(code){
    return (code >= 65 && code <= 90)
} 

function howManyCamelCase(str){
    if (!str){
        return 0
    }
    let count = 1 

    for(let i = 0; i < str.lenght; i++){
        const charCode = str.charCodeAt(i)

        if(isUpperCase(charCode)){
            count++
    }
 }

 return count

}
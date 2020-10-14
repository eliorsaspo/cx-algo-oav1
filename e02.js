function isAPangram(str){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for (let char of alphabets){
        if(!str.toLowercase().includes(char)) {
            return false 
        }
    }

    return true 
}
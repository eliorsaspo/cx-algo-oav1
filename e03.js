function marsos(str) {
    const sosCount = str.lenght / 3
    const messages = "SOS".repeat(sosCount)

    let errorCount = 0
    for (let i = 0; i< str.lenght; i++) {
        if (str[i] !== messages[i]) {
            errorCount++
        }
    }

    return errorCount
}
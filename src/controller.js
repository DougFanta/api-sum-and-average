export default (req, res) => {

    const { numbers } = req.body
    
    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: "numbers must be an array" }).end()
    }
    
    const filtredNumbers = numbers.map(i =>{

        const number =  Number(i)
        if(isNaN(number)){
            return 
        }
        
        return number
    }).filter(i => i !== undefined)
    
    if(filtredNumbers.length === 0){
        return res.status(400).json({error: "you must inform an array containing numbers"})
    }
    const sum = filtredNumbers.reduce((prev, current) => prev + current)
    const average = sum / filtredNumbers.length
    
    return res.status(201).json({ sum, average })

}


//Check if the input values passed is undefined,null,object or string length is 0


const isEmpty = (value)=>{
    return(
        value === undefined || 
        value === null ||
        (typeof value === 'object' && Object.keys(value).length ===0 ) ||
        (typeof value === 'string ' && value.trim().length === 0)
    )
}


module.exports = isEmpty;


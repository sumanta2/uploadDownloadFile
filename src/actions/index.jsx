export const getData=(num)=>{
    return(
        {type:"ShowData",
        payload:num}     //here we pass payload property  because we pass/use parameter value 
    )
}
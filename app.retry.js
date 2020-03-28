const retry = (times, func, params) => {
    let count = 1
    
    while(true){
        if(count >= times){
            return {content: 'fail to get data', time: count}
        }

        let result = func(params[0])
        if (result){
            result !== null
            return {content: result, time: count}
        }

        count+=1
    }

}



module.exports = {
    retry
}
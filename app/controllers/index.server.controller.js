const unboundedKnapsack = (values, weights, n, target) => {
    // create a lookup table
    // lookup[i] is going to store maximum value
    // with knapsack capacity i.
    const lookup = new Array(target + 1).fill(0);
  
    // fill lookup[] using above recursive formula
    for(let i = 0; i <= target; i++){
      for(let j = 0; j < n; j++){
        if(weights[j] <= i){
          lookup[i] = Math.max(lookup[i], lookup[i - weights[j]] + values[j]);
        }
      }
    }
    
    //return the max
    return lookup[target];
}
  
exports.calculate = function (req, res) {
    let inputData = {
        shirt1:parseInt(req.body.shirt1), 
        shirt2:parseInt(req.body.shirt2),
        shirt3:parseInt(req.body.shirt3),
        shirt4:parseInt(req.body.shirt4),
        shirt5:parseInt(req.body.shirt5)
    };
    
    console.log(inputData);
    const values = [8, 8, 8, 8, 8];
    const weights = [];
    const target = 8;

    for (const shirt in inputData) {
        weights.push(inputData[shirt]);
    }
    console.log(weights);

    let result = unboundedKnapsack(values, weights, values.length - 1, target);
    resultStr = result.toString();
    //
    console.log(resultStr);
    async function run() {
        return res.send({status: 200, msg:resultStr})
    } //end of run function
    run()

};

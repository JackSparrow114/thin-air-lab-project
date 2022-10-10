const unboundedKnapsack = (values, quantities, n, discounts) => {
  
    let combo = discounts.map((dis, index) => (quantities[index]===0)? 0:dis*values[index]);
    let totalQuantity = quantities.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
    );
    let lookup = new Array(totalQuantity).fill(0);
    console.log(totalQuantity, combo, lookup);  

    for(let i = 0; i < totalQuantity; i++){
        if(i<5){
        lookup[i] = combo[i]*(i+1);
        } else {
        lookup[i] = getMinValue(i, lookup);
        }
    }
    console.log(lookup);

    return lookup[totalQuantity-1];
}
  
  const getMinValue = (i, lookup) => {
    let midValue = Math.ceil((i+1)/2);
    let minPrice = Infinity;
    for(let j=0;j<midValue;j++){
      let currentPrice = lookup[i-1-j]+lookup[j];
      if(currentPrice<minPrice){
        minPrice = currentPrice;
      }
    }
    return minPrice;
  };
  
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
  const quantities = [];
  const discounts = [1, 0.95, 0.9, 0.8, 0.75];

    for (const shirt in inputData) {
        quantities.push(inputData[shirt]);
    }
    console.log(quantities);

    let result = unboundedKnapsack(values, quantities, quantities.length, discounts)
    resultStr = result.toString();
    //
    console.log(resultStr);
    async function run() {
        return res.send({status: 200, msg:resultStr})
    } //end of run function
    run()

};


//
exports.calculate = function (req, res) {
    let inputData = {
        shirt1:req.body.shirt1, 
        shirt2:req.body.shirt2,
        shirt3:req.body.shirt3,
        shirt4:req.body.shirt4,
        shirt5:req.body.shirt5
    };
    
    console.log(inputData);

    //
    async function run() {
        res.status(200).send(inputData);
    } //end of run function
    run()

};

var jwt = require('jsonwebtoken');

module.exports=function ensureToken(req, res, next) {
    var bearerHeader = req.headers["authorization"];  
      console.log(req.headers);

   if(bearerHeader)
   { 
              jwt.verify(bearerHeader, 'my_secrect_key', function(err, data) {
      
                if(err)
                {
               
                    
                    res.status(401).send({msg:"invalid token"});

                }else {

                //    tech.findOne({accessToken: bearerHeader}, { accessToken: 1}, function(err, result) {
                 
                //      if(result == null)
                //         {
          
                //                 res.status(401).send({msg:"token has expired!"});

                //         }else {

                //                     next();
                //             }
                            


                //     });
              
                  

                }
                
        });
     
  }else {
    res.status(401).send({msg:"authorization token is empty!"});
  }
 };


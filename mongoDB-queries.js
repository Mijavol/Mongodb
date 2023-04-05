<script>
    //num1 db.restaurants.find()
    //num2 db.restaurants.find({} , {"restaurant_id" : 1, "name" : 1, "borough" : 1,"cuisine" : 1})
    //num3 db.restaurants.find({} , {"restaurant_id" : 1, "name" : 1 , "borough" : 1 ,  "cuisine" : 1, "_id": 0})
    //num4 db.restaurants.find({} , {"restaurant_id" : 1, "name" : 1 , "borough" : 1 ,  "address" : {"zipcode" : 1}, "_id": 0})
    //num5 db.restaurants.find({ "borough" : "Bronx"})
    //num6 db.restaurants.find({ "borough" : "Bronx"}).limit(5)
    //num7 db.restaurants.find({ "borough" : "Bronx"}).skip(5).limit(5)
    //num8 db.restaurants.find({"grades.score": {$gt : 90}})
    
    
   
   
    //num9 db.restaurants.find({"grades.score":{ $lt: 100, $gt : 80 }})
    correcion : db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
    
    //num10 db.restaurants.find({"address.coord" : { $lt : -95.754168}})
    correcion : db.restaurants.find({"address.coord" : {$lt : -95.754168}});
    
    //num11 db.restaurants.find({ $and : [{"address.coord" : { $lt : -65.754168}}, 
                                          {"grades.score":{ $gt : 70 }}, 
                                          {"cuisine": {$not :{$regex : "American"}}}]})
    
    correcion : db.restaurants.find(
               {$and:
                       [{"cuisine" : {$ne :"American "}},
                       {"grades.score" : {$gt : 70}},
                       {"address.coord" : {$lt : -65.754168}} ]});
                    
    
    
    //num12 db.restaurants.find({"address.coord" : { $lt : -65.754168},
                                "grades.score":{ $gt : 70 }, 
                                "cuisine":{ $not : {$regex : "American"}}})
    
    correcion : db.restaurants.find(
                            { "cuisine" : {$ne : "American "},
                             "grades.score" :{$gt: 70},
                             "address.coord" : {$lt : -65.754168} });
    
    
    
    
    
    //num13 db.restaurants.find({"grades.grade":{ $regex : "A" },
                                 "cuisine":{ $not : {$regex : "American"}},
                                 "borough" : {$not :{$regex : "Brooklyn"}}}).sort({"cuisine":-1})

    //num14 db.restaurants.find({"name":{$regex : /^Wil/}} ,
                                {"restaurant_id" : 1 ,"name": 1 ,
                                 "borough" : 1 , "cuisine" : 1})

    //num15 db.restaurants.find({ "name": { $regex: /ces$/ } }, 
                                { "restaurant_id": 1, "name": 1,
                                 "borough": 1, "cuisine": 1 })

    //num16 db.restaurants.find({ "name": { $regex: /Reg/ } }, 
                                { "restaurant_id": 1, "name": 1,
                                 "borough": 1, "cuisine": 1 }) 

    //num17  db.restaurants.find({ $and : [{"borough": { $eq : "Bronx"}},
                                 {$or : [{"cuisine":{$eq : "American"}},
                                 {"cuisine":{$eq : "Chinese"}}]}] })                            

    //num18  db.restaurants.find({ $or : [{"borough" : { $eq : "Staten Island"}} ,
                                          {"borough" : { $eq :"Brooklyn"}},
                                          {"borough" : { $eq : "Bronx"}} ,
                                          {"borough" : { $eq :"Queens"}}]} , 
                                          {"restaurant_id" : 1,"name":1,"borough" : 1,"cuisine":1})

    //num19  db.restaurants.find({ $nor : [{"borough" : { $eq : "Staten Island"}} ,
                                          {"borough" : { $eq :"Brooklyn"}},
                                          {"borough" : { $eq : "Bronx"}} ,
                                          {"borough" : { $eq :"Queens"}}]} , 
                                          {"restaurant_id" : 1,"name":1,"borough" : 1,"cuisine":1})
    //num20  db.restaurants.find({"grades.score" : {$lt : 10}}, 
                                 {"restaurant_id" : 1,"name":1,
                                 "borough" : 1,"cuisine":1})

    //num21 db.restaurants.find({ $and : [  {"cuisine" : { $eq : "Seafood"}},
                                { $nor :[{ "cuisine" : { $eq : "American"}} , 
                                {"cuisine" :{ $eq : "Chinese"}}]} ]  } , 
                                {"restaurant_id" : 1,"name":1,"borough" : 1,"cuisine":1})
    
    
    correcion : db.restaurants.find({$or: [
                                 {"name": /^Wil/}, 
                                 {"$and": [
                                 {"cuisine" : {$ne :"American "}}, 
                                 {"cuisine" : {$ne :"Chinees"}}]} ]},
                                 {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});


    
    
    
    
    
    //num22 db.restaurants.find({ $and : [  {"grades.grade" : { $eq : "A"}}, 
                                { "grades.score" : { $eq : 11 }} , 
                                {"grades.date" :{ $eq : ISODate("2014-08-11T00:00:00Z")}}]} ,
                                {"restaurant_id" : 1,"name":1,"grades":1})    


    //num23 db.restaurants.find({ $and:  [{"grades.1.grade":{ $eq : "A"}}, 
                                {"grades.1.score": { $eq : 9}}, 
                                {"grades.1.date": ISODate("2014-08-11T00:00:00Z")}] } ,
                                 {  "name" : 1, "grades":1})

    //num24 db.restaurants.find({ $and:[{ "address.coord.1": { $gte: 42 }},
                                { "address.coord.1": { $lte: 52 }} ]},
                                 { "restaurant_id": 1, "name": 1, "address": 1 })

    //num25 db.restaurants.find({},{"name":1,"_id":0}).sort({"name" : 1})

    //num26 db.restaurants.find({},{"name":1,"_id":0}).sort({"name" : -1, })  

    //num27  db.restaurants.find({},{"cuisine":1, "borough" :1,"_id":0})
                                .sort({"cuisine" : 1,"borough" :-1})

    //num28  db.restaurants.find({"address.street" : { $exists: true}}) 

    //num29 db.restaurants.find({"address.coord" : { $type : "double"}})


    //num30 db.restaurants.find({"grades.score" :{$mod : [7,0]} },
                         {"restaurant_id" : 1,"name":1,"grades":1})

    //num31 db.restaurants.find({name:{$regex: /mon/i}},{name:1,borough:1,"address.coord":1,cuisine:1})                                                  

    //num32 db.restaurants.find({name:{$regex: /^Mad/i}},{name:1,borough:1,"address.coord":1,cuisine:1})

                               






</script>

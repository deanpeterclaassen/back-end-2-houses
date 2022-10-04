const db = require("./db.json")

const upcomingHouseId = 4

module.exports = {
    getHouses: (req,res) => res.status(200).send(db),

    deleteHouse:(req,res) => {
        let index = db.findIndex(elem => elem.id === +req.params.id)
        db.splice(index,1)
        res.status(200).send(db)

    },

    createHouses: (req,res) => {
        
        let {address, price, imageURL} = req.body
        let newHouse = {
            id: upcomingHouseId,
            address,
            price,
            imageURL
        }
        db.push(newHouse)
        res.status(200).send(db)
        upcomingHouseId++

    },
        
    
    updateHouse:(req,res) => {
        let { id } = req.params
        let {type} = req.body
        let index = db.findIndex(elem => elem.id === +id)
        
        if (type === "plus"){
            db[index].price += 10000
            res.status(200).send(db)
        }else  if(type === "minus"){
            db[index].price -= 10000
            res.status(200).send(db)
        }




    }
      
}




const router = require ("express").Router();
let Candidate = require("../../models/payment/competitor");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const email = req.body.email;
    const contact_number = Number(req.body.contact_number);
    const gender = req.body.gender;
    const comp_type = req.body.comp_type;
    const card_number = Number(req.body.card_number);
    const expiration = Date(req.body.expiration);
    const cvv = Number(req.body.cvv);

    const newCandidate = new Candidate ({
        name,
        age,
        email,
        contact_number,
        gender,
        comp_type,
        card_number,
        expiration,
        cvv
    })

    newCandidate.save().then(()=>{
        res.json("Candidate Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    
    Candidate.find().then((candidates)=>{
        res.json(candidates)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,email,contact_number,gender,comp_type,card_number,expiration,cvv} = req.body;

    const updateCandidate ={
        name,
        age,
        email,
        contact_number,
        gender,
        comp_type,
        card_number,
        expiration,
        cvv 
    }

    const update = await Candidate.findByIdAndUpdate(userId, updateCandidate).then(()=>{
        res.status(200).send({status: "User updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error in updating data", error: err.message});
    })
 
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Candidate.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await Candidate.findById(userId)
    .then(()=>{
        res.status(200).send({status: "User fetched",user:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error in getting user", error: err.message});
    })
})

module.exports = router;

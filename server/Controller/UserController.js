import prisma from "../DB/db.config.js";

export const createUser = async (req,res)=>{
    const name =req.body.name;
    const email =req.body.email;
    const address =req.body.address;
    const phone =req.body.phone;
    const role =req.body.role;
    const password =req.body.password;
    
    //console.log(req.body.email);
    const findUser = await prisma.user.findFirst({
        where: {
            email: email,
    },
    });
    if(findUser){
        console.log("Email already exists");
    }
    else{
    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            address:address,
            phone:phone,
            role:role,
            password:password,
        },
    });
    
    //console.log(newUser);
    res.send(newUser);
}
}

export const findUser = async (req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    console.log(req.body.email);
    const foundUser = await prisma.user.findFirst({
        where: {
            AND: [
                { email:email },
                { password:password }
                ],
    },
    });
    if(foundUser==null){
        res.status(204).send("Not found.");
    }
    else{
   // console.log(foundUser);
    res.status(200).send(foundUser);
    }
}

export const getUser = async(req,res)=>{
    const id=req.params.userId;
    console.log(id);
    const gotUser = await prisma.user.findFirst({
        where: {
            id: Number(id),
    },
    });
    //console.log(gotUser);
    res.send(gotUser);
}

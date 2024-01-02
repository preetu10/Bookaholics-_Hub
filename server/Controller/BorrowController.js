import prisma from "../DB/db.config.js";

export const createBorrowPost = async(req,res)=>{
    const b_title =req.body.b_title;
    const  b_authorname =req.body.b_authorname;
    const b_edition =req.body.b_edition;
    const b_numOfPages=Number(req.body.b_numOfPages);
    const b_description=req.body.b_description;
    const b_price =Number(req.body.b_price);
    const b_quantity =Number(req.body.b_quantity);
    const category = req.body.category;
    const pickupPoint = req.body.pickupPoint;
    const returnTime = req.body.returnTime;
    const soldBy_Email =req.body.b_soldBy_Email;
    const newPost=await prisma.borrowableBook.create({
        data:{
            b_title:b_title,
            b_authorname:b_authorname,
            b_edition:b_edition,
            b_numOfPages:b_numOfPages,
            b_description:b_description,
            b_price:b_price,
            b_quantity:b_quantity,
            category:category,
            pickupPoint:pickupPoint,
            returnTime:returnTime,
            paymentForBorrow:Number(b_price)*0.2,
            soldBy_Email:soldBy_Email
        },
    });
    
    console.log(newPost);
    res.send(newPost);
}

export const getBorrowPosts = async(req,res)=>{
    const posts= await prisma.borrowableBook.findMany();
    console.log(posts);
    res.send(posts);
}
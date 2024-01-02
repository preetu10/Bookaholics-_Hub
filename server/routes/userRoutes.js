import { Router } from "express";
import {createUser,findUser, getUser} from "../Controller/UserController.js";
import { createSellPost, getBuyPosts } from "../Controller/BuySellController.js";
import {createBorrowPost, getBorrowPosts } from "../Controller/BorrowController.js";
import { createExchangePost, getExchangePosts } from "../Controller/ExchangeController.js";
const router = new Router();

router.post("/register",createUser);
router.post("/login",findUser);
router.post("/addsell",createSellPost);
router.post("/addborrow",createBorrowPost);
router.post("/addexchange",createExchangePost);

router.get("/profile/:userId",getUser)
router.get("/buyposts",getBuyPosts);
router.get("/borrowposts",getBorrowPosts);
router.get("/exchangeposts",getExchangePosts);

export default router;
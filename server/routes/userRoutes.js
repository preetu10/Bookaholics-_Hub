import { Router } from "express";
import {createUser,findUser, getUser} from "../Controller/UserController.js";
import { createSellPost, getBuyPosts, getABook, orderPlace, getOrderRequests, deleteOrderProcess, confirmOrderRequest, getMySellPosts, getMyPurchase, getMySellRecords, editSellPost } from "../Controller/BuySellController.js";
import {createBorrowPost, getBorrowPosts, getBorrowBook, borrowPlace, getBorrowRequests, deleteBorrowProcess, confirmBorrowRequest, getMyBorrowPosts, getMyBorrow, getMyLendRecords, editBorrowPost } from "../Controller/BorrowController.js";
import { createExchangePost, getExchangePosts, getExchangeBook, exchangePlace, getExchangeRequests, deleteExchangeProcess, confirmRequest, getMyExchangePosts, getMyExchange, getMyExchangeRecords, editExchangePost } from "../Controller/ExchangeController.js";
// const upload = require('./multer.config');
import upload from '../multer.config.js';
const router = new Router();



router.post("/register",createUser);
router.post("/login",findUser);
router.post("/addsell",upload.single('image'),createSellPost);
router.post("/addborrow",upload.single('image'),createBorrowPost);
router.post("/addexchange",upload.single('image'),createExchangePost);
router.post("/orderplace",orderPlace);
router.post("/borrowplace",borrowPlace)
router.post("/exchangeplace",exchangePlace);

router.get("/profile/:userId",getUser)
router.get("/buyposts",getBuyPosts);
router.get("/borrowposts",getBorrowPosts);
router.get("/exchangeposts",getExchangePosts);
router.get("/book-info/:sid",getABook);
router.get("/borrow-book-info/:borrId",getBorrowBook);
router.get("/exchange-book-info/:ebId",getExchangeBook);
router.get("/exchange-requests/:eEmail",getExchangeRequests);
router.get("/borrow-requests/:eEmail",getBorrowRequests);
router.get("/order-requests/:eEmail",getOrderRequests);
router.get("/get-my-sell-posts/:eEmail",getMySellPosts);
router.get("/get-my-borrow-posts/:eEmail",getMyBorrowPosts);
router.get("/get-my-exchange-posts/:eEmail",getMyExchangePosts);
router.get("/my-purchase/:eEmail",getMyPurchase);
router.get("/my-borrow/:eEmail",getMyBorrow);
router.get("/my-exchange/:eEmail",getMyExchange);
router.get("/my-sell-records/:eEmail",getMySellRecords);
router.get("/my-lend-records/:eEmail",getMyLendRecords);
router.get("/my-exchange-records/:eEmail",getMyExchangeRecords);

router.delete("/delete-exchange-process/:epId",deleteExchangeProcess);
router.delete("/delete-borrow-process/:bpId",deleteBorrowProcess);
router.delete("/delete-order-process/:orderId",deleteOrderProcess);

router.put("/confirm-request/:epId",confirmRequest);
router.put("/confirm-borrow-request/:bpId",confirmBorrowRequest);
router.put("/confirm-order-request/:orderId",confirmOrderRequest);
router.put("/edit-sell",editSellPost);
router.put("/edit-borrow",editBorrowPost);
router.put("/edit-exchange",editExchangePost);


export default router;


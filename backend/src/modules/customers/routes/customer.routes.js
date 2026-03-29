const express = require("express");
const router = express.Router();
const { 
  getProfile, 
  updateProfile, 
  getTailors,
  getWishlist,
  wishlistToggle,
  applyPromoCode,
  getReferralStats
} = require("../controllers/customer.controller");
const { 
  getAddresses, 
  addAddress, 
  updateAddress, 
  deleteAddress 
} = require("../controllers/address.controller");
const {
  getCart,
  addToCart,
  removeFromCart
} = require("../controllers/cart.controller");
const { protect, authorize } = require("../../../middlewares/auth.middleware");

router.use(protect);

router.get("/profile", authorize("customer", "admin"), getProfile);
router.patch("/profile", authorize("customer", "admin"), updateProfile);
router.get("/tailors", authorize("customer", "delivery", "tailor", "admin"), getTailors);

// Address Management
router.get("/addresses", authorize("customer", "admin"), getAddresses);
router.post("/addresses", authorize("customer", "admin"), addAddress);
router.patch("/addresses/:id", authorize("customer", "admin"), updateAddress);
router.delete("/addresses/:id", authorize("customer", "admin"), deleteAddress);

// Wishlist
router.get("/wishlist", authorize("customer", "admin", "tailor", "delivery"), getWishlist);
router.post("/wishlist/toggle", authorize("customer", "admin", "tailor", "delivery"), wishlistToggle);

// Promo
router.post("/apply-promo", authorize("customer", "admin"), applyPromoCode);

// Refer & Earn
router.get("/referral-stats", authorize("customer", "admin"), getReferralStats);

// Cart Management
router.get("/cart", authorize("customer", "admin", "tailor", "delivery"), getCart);
router.post("/cart", authorize("customer", "admin", "tailor", "delivery"), addToCart);
router.delete("/cart/:itemId", authorize("customer", "admin", "tailor", "delivery"), removeFromCart);

module.exports = router;

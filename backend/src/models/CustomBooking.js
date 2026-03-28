const mongoose = require("mongoose");

const customBookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookingType: {
      type: String,
      default: "bridal", // can be expanded later
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "assigned", "accepted", "completed", "cancelled"],
      default: "pending",
    },
    assignedTailor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tailor",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomBooking", customBookingSchema);

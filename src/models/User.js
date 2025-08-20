import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required 📝"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 character 📏"],
      maxlength: [20, "Username cannot exceed 20 character 📏"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores 🔤",
      ],
    },

    email: {
      type: String,
      required: [true, "Email is required 📧"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address 📧",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required 🔐"],
      minlength: [6, "Password must be at least 6 character 🔐"],
      select: false,
    },

    preferredPseudonym: {
      type: String,
      trim: true,
      maxlength: [15, "Pseudonym cannot exceed 15 characters 📏"],
    },

    defaultAnonymous: {
      type: Boolean,
      default: false,
    },

    emotionCount: {
      type: Number,
      default: 0,
    },

    lastActive: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


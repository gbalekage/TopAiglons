import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
  paymentMethod?: string;
  shippingAddress?: string;
  billingAddress?: string;
  verified?: boolean;
  verificationCode?: string;
  verificationTokenExpires?: Date;
  lastLogin?: Date;
  resetToken?: string;
  activityLogs?: {
    action: string;
    timestamp: Date;
    divice?: string;
    location?: string;
  }[];
  resetTokenExpires?: Date;
  role: "client" | "admin";
  organization?: string;
  hosting: Types.ObjectId[];
  domains: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    paymentMethod: { type: String },
    shippingAddress: { type: String },
    billingAddress: { type: String },
    verified: { type: Boolean, default: false },
    lastLogin: { type: Date },
    verificationCode: { type: String },
    verificationTokenExpires: { type: Date },
    activityLogs: [
      {
        action: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        device: { type: String },
        location: { type: String },
      },
    ],
    resetToken: { type: String },
    resetTokenExpires: { type: Date },
    role: {
      type: String,
      enum: ["client", "admin", "manager"],
      default: "client",
    },
    organization: { type: String },
    hosting: [{ type: Schema.Types.ObjectId, ref: "Hosting" }],
    domains: [{ type: Schema.Types.ObjectId, ref: "Domain" }],
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);

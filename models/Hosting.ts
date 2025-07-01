import mongoose, { Schema, Document } from "mongoose";

export interface IHosting extends Document {
  user: mongoose.Types.ObjectId;
  plan: string;
  domainName: mongoose.Types.ObjectId; // now references Domains
  status: "active" | "expired" | "pending";
  startDate: Date;
  endDate: Date;
}

const HostingSchema = new Schema<IHosting>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    plan: { type: String, required: true },
    domainName: { type: Schema.Types.ObjectId, ref: "Domain", required: true }, // updated
    status: {
      type: String,
      enum: ["active", "expired", "pending"],
      default: "pending",
    },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.Hosting ||
  mongoose.model<IHosting>("Hosting", HostingSchema);

import mongoose, { Schema, Document } from "mongoose";

export interface IDomain extends Document {
  name: string;
  tld: string; // e.g., ".com", ".net"
  registered: boolean;
  provider?: string;
  purchasedAt?: Date;
  expiresAt?: Date;
  owner: mongoose.Types.ObjectId; // Reference to User
}

const DomainSchema = new Schema<IDomain>(
  {
    name: { type: String, required: true },
    tld: { type: String, required: true },
    registered: { type: Boolean, default: false },
    provider: { type: String },
    purchasedAt: { type: Date },
    expiresAt: { type: Date },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Domain ||
  mongoose.model<IDomain>("Domain", DomainSchema);

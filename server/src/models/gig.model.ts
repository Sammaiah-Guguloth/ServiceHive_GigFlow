import mongoose, {Document , Schema} from "mongoose";

export interface IGig extends Document {
    title : String,
    description : String,
    budget : number,
    ownerId : mongoose.Types.ObjectId,
    status : "open" | "assigned",
};

const gigSchema = new Schema<IGig>(
    {
      title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true
      },
      budget: {
        type: Number,
        required: true
      },
      ownerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      status: {
        type: String,
        enum: ["open", "assigned"],
        default: "open"
      }
    },
    { timestamps: true }
  );

const gigModel = mongoose.model<IGig>("Gig" , gigSchema);

export default gigModel;
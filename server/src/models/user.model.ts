import mongoose , {Document , Schema} from "mongoose";

export interface IUser extends Document {
    name : String,
    email : String,
    password : String,
}

const userSchema = new Schema<IUser>({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
    }
} , {timestamps : true});

const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
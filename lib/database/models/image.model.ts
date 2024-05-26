import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationTypes: string;
    pubicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRation?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}




const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationTypes: { type: String, required: true },
    pubicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number},
    height: { type: Number},
    config: { type: Object},
    transormationUrl: { type: URL},
    aspectRation: { type: String},
    color: { type: String},
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
});

const Image = models?.Image || model('Image',ImageSchema);

export default Image;
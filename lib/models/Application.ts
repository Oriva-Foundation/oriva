import mongoose, { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
  _id: string;
  type: 'volunteer' | 'job';
  fullName: string;
  email: string;
  phone: string;
  position?: string; // For job applications
  experience?: string;
  skills?: string;
  message: string;
  availability?: string; // For volunteer applications
  portfolio?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['volunteer', 'job']
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    enum: ['0-1', '1-3', '3-5', '5+']
  },
  skills: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  availability: {
    type: String,
    enum: ['full-time', 'part-time', 'flexible']
  },
  portfolio: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

// Index for efficient queries
ApplicationSchema.index({ type: 1, status: 1 });
ApplicationSchema.index({ email: 1 });

export default mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface IEventRegistration extends Document {
  _id: string;
  eventId: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  expectations?: string;
  status: 'registered' | 'attended' | 'cancelled';
  registeredAt: Date;
  updatedAt: Date;
}

const EventRegistrationSchema: Schema = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true
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
  experienceLevel: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  expectations: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['registered', 'attended', 'cancelled'],
    default: 'registered'
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
EventRegistrationSchema.index({ eventId: 1, email: 1 }, { unique: true });
EventRegistrationSchema.index({ eventId: 1, status: 1 });

export default mongoose.models.EventRegistration || mongoose.model<IEventRegistration>('EventRegistration', EventRegistrationSchema);
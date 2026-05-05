import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  date: Date;
  endDate?: Date;
  location: string;
  locationAr: string;
  type: 'workshop' | 'hackathon' | 'meetup' | 'competition' | 'webinar';
  capacity: number;
  registeredCount: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  image?: string;
  registrationDeadline: Date;
  requirements?: string;
  requirementsAr?: string;
  tags: string[];
  organizer: string;
  contactEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  titleAr: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  descriptionAr: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  locationAr: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['workshop', 'hackathon', 'meetup', 'competition', 'webinar']
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  registeredCount: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  image: {
    type: String,
    trim: true
  },
  registrationDeadline: {
    type: Date,
    required: true
  },
  requirements: {
    type: String,
    trim: true
  },
  requirementsAr: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  organizer: {
    type: String,
    required: true,
    trim: true
  },
  contactEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
EventSchema.index({ date: 1, status: 1 });
EventSchema.index({ type: 1 });
EventSchema.index({ tags: 1 });

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
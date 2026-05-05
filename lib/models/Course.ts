import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  instructor: string;
  instructorAr: string;
  instructorBio?: string;
  instructorBioAr?: string;
  duration: string; // e.g., "8 weeks", "2 hours"
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number; // 0 for free courses
  currency: string; // e.g., "USD", "SAR"
  maxStudents?: number;
  enrolledCount: number;
  status: 'draft' | 'published' | 'archived';
  image?: string;
  syllabus?: string[];
  syllabusAr?: string[];
  prerequisites?: string;
  prerequisitesAr?: string;
  tags: string[];
  startDate?: Date;
  endDate?: Date;
  enrollmentDeadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema({
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
  instructor: {
    type: String,
    required: true,
    trim: true
  },
  instructorAr: {
    type: String,
    required: true,
    trim: true
  },
  instructorBio: {
    type: String,
    trim: true
  },
  instructorBioAr: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    required: true,
    default: 'USD'
  },
  maxStudents: {
    type: Number,
    min: 1
  },
  enrolledCount: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  image: {
    type: String,
    trim: true
  },
  syllabus: [{
    type: String,
    trim: true
  }],
  syllabusAr: [{
    type: String,
    trim: true
  }],
  prerequisites: {
    type: String,
    trim: true
  },
  prerequisitesAr: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  enrollmentDeadline: {
    type: Date
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
CourseSchema.index({ status: 1, level: 1 });
CourseSchema.index({ tags: 1 });
CourseSchema.index({ price: 1 });

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  longDescription?: string;
  longDescriptionAr?: string;
  status: 'planning' | 'in-progress' | 'completed' | 'maintenance';
  category: string; // e.g., 'web', 'mobile', 'ai', 'education'
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  contributors: {
    name: string;
    nameAr: string;
    role: string;
    roleAr: string;
    github?: string;
    linkedin?: string;
  }[];
  featured: boolean;
  startDate?: Date;
  completionDate?: Date;
  impact?: string;
  impactAr?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema({
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
  longDescription: {
    type: String,
    trim: true
  },
  longDescriptionAr: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['planning', 'in-progress', 'completed', 'maintenance'],
    default: 'planning'
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  githubUrl: {
    type: String,
    trim: true
  },
  liveUrl: {
    type: String,
    trim: true
  },
  images: [{
    type: String,
    trim: true
  }],
  contributors: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    nameAr: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    roleAr: {
      type: String,
      required: true,
      trim: true
    },
    github: {
      type: String,
      trim: true
    },
    linkedin: {
      type: String,
      trim: true
    }
  }],
  featured: {
    type: Boolean,
    default: false
  },
  startDate: {
    type: Date
  },
  completionDate: {
    type: Date
  },
  impact: {
    type: String,
    trim: true
  },
  impactAr: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Indexes for efficient queries
ProjectSchema.index({ status: 1, featured: 1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ technologies: 1 });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/database/connect';
import Application from '@/lib/models/Application';
import { z } from 'zod';

const applicationSchema = z.object({
  type: z.enum(['volunteer', 'job']),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  position: z.string().optional(),
  experience: z.enum(['0-1', '1-3', '3-5', '5+']).optional(),
  skills: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  availability: z.enum(['full-time', 'part-time', 'flexible']).optional(),
  portfolio: z.string().url().optional().or(z.literal('')),
});

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Validate the request body
    const validatedData = applicationSchema.parse(body);

    // Create new application
    const application = new Application({
      ...validatedData,
      portfolio: validatedData.portfolio || undefined,
    });

    await application.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        data: {
          id: application._id,
          status: application.status,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Application submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Build query
    const query: any = {};
    if (type) query.type = type;
    if (status) query.status = status;

    const skip = (page - 1) * limit;

    const applications = await Application
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Application.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });

  } catch (error) {
    console.error('Applications fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
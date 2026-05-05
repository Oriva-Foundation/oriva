import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/database/connect';
import Event from '@/lib/models/Event';
import { z } from 'zod';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  titleAr: z.string().min(1, 'Arabic title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  descriptionAr: z.string().min(10, 'Arabic description must be at least 10 characters'),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
  endDate: z.string().optional(),
  location: z.string().min(1, 'Location is required'),
  locationAr: z.string().min(1, 'Arabic location is required'),
  type: z.enum(['workshop', 'hackathon', 'meetup', 'competition', 'webinar']),
  capacity: z.number().min(1, 'Capacity must be at least 1'),
  registrationDeadline: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid registration deadline'),
  requirements: z.string().optional(),
  requirementsAr: z.string().optional(),
  tags: z.array(z.string()).default([]),
  organizer: z.string().min(1, 'Organizer is required'),
  contactEmail: z.string().email('Invalid contact email'),
  image: z.string().optional(),
});

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'upcoming';
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Build query
    const query: any = {};
    if (status) query.status = status;
    if (type) query.type = type;

    const skip = (page - 1) * limit;

    const events = await Event
      .find(query)
      .sort({ date: 1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Event.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    });

  } catch (error) {
    console.error('Events fetch error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Validate the request body
    const validatedData = eventSchema.parse(body);

    // Create new event
    const event = new Event({
      ...validatedData,
      date: new Date(validatedData.date),
      endDate: validatedData.endDate ? new Date(validatedData.endDate) : undefined,
      registrationDeadline: new Date(validatedData.registrationDeadline),
    });

    await event.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Event created successfully',
        data: event
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Event creation error:', error);

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
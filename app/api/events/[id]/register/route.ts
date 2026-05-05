import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/database/connect';
import Event from '@/lib/models/Event';
import EventRegistration from '@/lib/models/EventRegistration';
import { z } from 'zod';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  expectations: z.string().optional(),
});

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const eventId = params.id;
    const body = await request.json();

    // Validate the request body
    const validatedData = registrationSchema.parse(body);

    // Check if event exists and has capacity
    const event = await Event.findById(eventId);
    if (!event) {
      return NextResponse.json(
        {
          success: false,
          message: 'Event not found'
        },
        { status: 404 }
      );
    }

    if (event.status !== 'upcoming') {
      return NextResponse.json(
        {
          success: false,
          message: 'Event registration is not open'
        },
        { status: 400 }
      );
    }

    if (event.registeredCount >= event.capacity) {
      return NextResponse.json(
        {
          success: false,
          message: 'Event is fully booked'
        },
        { status: 400 }
      );
    }

    // Check if user is already registered
    const existingRegistration = await EventRegistration.findOne({
      eventId,
      email: validatedData.email
    });

    if (existingRegistration) {
      return NextResponse.json(
        {
          success: false,
          message: 'You are already registered for this event'
        },
        { status: 400 }
      );
    }

    // Create registration
    const registration = new EventRegistration({
      eventId,
      ...validatedData,
    });

    await registration.save();

    // Update event registered count
    await Event.findByIdAndUpdate(eventId, {
      $inc: { registeredCount: 1 }
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully registered for the event',
        data: {
          id: registration._id,
          eventId,
          status: registration.status,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Event registration error:', error);

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
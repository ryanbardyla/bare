// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;
    
    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Here you would typically:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Maybe create a support ticket
    
    // For now, we'll just simulate success
    console.log('Contact form submission:', { name, email, message });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
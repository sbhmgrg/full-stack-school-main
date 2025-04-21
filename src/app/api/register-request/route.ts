// app/api/register-request/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const requestData = await request.json();

    // Create reusable transporter object using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Registration System" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: 'New Registration Request',
      html: `
        <h1>New Registration Request</h1>
        <p><strong>Name:</strong> ${requestData.firstName} ${requestData.lastName}</p>
        <p><strong>Email:</strong> ${requestData.email}</p>
        <p><strong>Role:</strong> ${requestData.role}</p>
        <p><strong>Institution:</strong> ${requestData.institution}</p>
        ${requestData.phone ? `<p><strong>Phone:</strong> ${requestData.phone}</p>` : ''}
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Registration System" <${process.env.GMAIL_USER}>`,
      to: requestData.email,
      subject: 'Your Registration Request Has Been Received',
      html: `
        <p>Dear ${requestData.firstName},</p>
        <p>Thank you for your registration request. We'll review your information and contact you soon.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration request' },
      { status: 500 }
    );
  }
}
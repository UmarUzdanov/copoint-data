import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
        for (const field of requiredFields) {
            if (!data[field]) {
                return NextResponse.json(
                    {error: `${field} is required`},
                    {status: 400}
                );
            }
        }

        // Check consent
        if (!data.consent) {
            return NextResponse.json(
                {error: 'You must consent to data processing'},
                {status: 400}
            );
        }

        // In a real application, you would:
        // 1. Send an email using a service like SendGrid, Mailgun, etc.
        // 2. Store the contact information in a database
        // 3. Set up notifications for your team

        console.log('Contact form submission:', data);

        // Simulate a successful submission
        return NextResponse.json({
            success: true,
            message: 'Thank you for your message. We will contact you shortly!'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            {error: 'Failed to process your request'},
            {status: 500}
        );
    }
}

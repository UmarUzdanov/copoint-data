import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate email
        if (!data.email) {
            return NextResponse.json(
                {error: 'Email is required'},
                {status: 400}
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                {error: 'Please provide a valid email address'},
                {status: 400}
            );
        }

        // In a real application, you would:
        // 1. Add the email to your newsletter service (Mailchimp, ConvertKit, etc.)
        // 2. Possibly store the subscription in a database
        // 3. Set up confirmation emails

        console.log('Newsletter subscription:', data.email);

        // Simulate a successful subscription
        return NextResponse.json({
            success: true,
            message: 'Thank you for subscribing to our newsletter!'
        });

    } catch (error) {
        console.error('Error processing newsletter subscription:', error);
        return NextResponse.json(
            {error: 'Failed to process your subscription'},
            {status: 500}
        );
    }
}
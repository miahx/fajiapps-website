import { type NextRequest, NextResponse } from "next/server"

// This would typically connect to your database
const subscribers: Array<{
  id: number
  email: string
  subscriptionDate: string
  status: string
  source: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const { email, source = "Landing Page" } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 })
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find((sub) => sub.email === email)
    if (existingSubscriber) {
      return NextResponse.json({ success: false, message: "Email already subscribed" }, { status: 409 })
    }

    // Add new subscriber
    const newSubscriber = {
      id: subscribers.length + 1,
      email,
      subscriptionDate: new Date().toISOString(),
      status: "active",
      source,
    }

    subscribers.push(newSubscriber)

    return NextResponse.json({ success: true, message: "Successfully subscribed" }, { status: 201 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    total: subscribers.length,
    subscribers: subscribers.map((sub) => ({
      email: sub.email,
      subscriptionDate: sub.subscriptionDate,
      source: sub.source,
    })),
  })
}

export interface CoachingPlan {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  maxLearners: number;
  sessionsPerMonth: number;
  sessionDurationMinutes: number;
  isPopular: boolean;
  features: string[];
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  language: string;
  displayOrder: number;
}

export interface BookingAvailabilitySlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export type AppointmentType =
  | "FreeAssessmentCall"
  | "GroupCoaching"
  | "PrivateOneOnOneCoaching";

export interface CreateBookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  preferredLanguage: "en" | "fr";
  currentLevel: string | null;
  goals: string | null;
  message: string | null;
  appointmentType: AppointmentType;
  appointmentDate: string;
  startTime: string;
  endTime: string | null;
  timeZone: string;
  honeypot: string;
}

export interface CreateContactMessageRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5161/api"
).replace(/\/+$/, "");

function normalizeApiTime(value: string) {
  return /^\d{2}:\d{2}$/.test(value) ? `${value}:00` : value;
}

async function apiRequest<T>(
  path: string,
  init: RequestInit = {}
): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const body = await response.text();
    let message = `API request failed (${response.status}).`;

    if (body) {
      try {
        const parsed: unknown = JSON.parse(body);
        if (typeof parsed === "object" && parsed !== null) {
          const errorBody = parsed as {
            message?: unknown;
            errors?: unknown;
            title?: unknown;
          };
          if (typeof errorBody.message === "string") {
            message = errorBody.message;
          } else if (Array.isArray(errorBody.errors)) {
            message = errorBody.errors.filter(
              (error): error is string => typeof error === "string"
            ).join(" ");
          } else if (typeof errorBody.title === "string") {
            message = errorBody.title;
          }
        }
      } catch {
        message = `API request failed (${response.status}).`;
      }
    }

    throw new ApiError(message, response.status);
  }

  return (await response.json()) as T;
}

export function getCoachingPlans(signal?: AbortSignal) {
  return apiRequest<CoachingPlan[]>("/coachingplans", { signal });
}

export function getFaqs(language: "en" | "fr", signal?: AbortSignal) {
  return apiRequest<FaqEntry[]>(
    `/faqs?language=${encodeURIComponent(language)}`,
    { signal }
  );
}

export function getBookingAvailability(
  appointmentType: AppointmentType,
  date: string,
  signal?: AbortSignal
) {
  const query = new URLSearchParams({
    appointmentType,
    date,
  });

  return apiRequest<BookingAvailabilitySlot[]>(
    `/bookings/availability?${query.toString()}`,
    { signal }
  );
}

export function createBooking(request: CreateBookingRequest) {
  return apiRequest<{
    id: string;
    status: string;
    notificationsSent: boolean;
  }>("/bookings", {
    method: "POST",
    body: JSON.stringify({
      ...request,
      startTime: normalizeApiTime(request.startTime),
      endTime: request.endTime
        ? normalizeApiTime(request.endTime)
        : null,
    }),
  });
}

export function createContactMessage(request: CreateContactMessageRequest) {
  return apiRequest<{ id: string; notificationSent: boolean }>("/contactmessages", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

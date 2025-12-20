-- Create bookings table to store form submissions
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  package TEXT NOT NULL,
  travel_date DATE NOT NULL,
  travelers INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bookings (public form)
CREATE POLICY "Anyone can submit a booking" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via service role (admin access)
CREATE POLICY "Service role can read all bookings" 
ON public.bookings 
FOR SELECT 
TO service_role
USING (true);
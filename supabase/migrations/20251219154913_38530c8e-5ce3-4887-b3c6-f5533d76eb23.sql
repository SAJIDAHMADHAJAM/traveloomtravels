-- Allow authenticated users to read all bookings (for admin access)
CREATE POLICY "Authenticated users can read bookings" 
ON public.bookings 
FOR SELECT 
TO authenticated
USING (true);

-- Allow authenticated users to update booking status
CREATE POLICY "Authenticated users can update bookings" 
ON public.bookings 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);
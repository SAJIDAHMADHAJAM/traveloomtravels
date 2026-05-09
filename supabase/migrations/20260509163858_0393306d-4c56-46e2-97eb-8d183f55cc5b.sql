DROP POLICY IF EXISTS "Authenticated users can read bookings" ON public.bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON public.bookings;

CREATE POLICY "Service role can update bookings"
ON public.bookings
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Service role can delete bookings"
ON public.bookings
FOR DELETE
TO service_role
USING (true);
// import { useState, useEffect } from "react";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { Search, Filter, RefreshCw, Calendar, Users, Phone, Mail, Package } from "lucide-react";
// import { format } from "date-fns";

// interface Booking {
//   id: string;
//   name: string;
//   email: string | null;
//   phone: string;
//   package: string;
//   travel_date: string;
//   travelers: number;
//   message: string | null;
//   status: string;
//   created_at: string;
// }

// const Admin = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const { toast } = useToast();

//   const fetchBookings = async () => {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("bookings")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) {
//       toast({
//         title: "Error fetching bookings",
//         description: error.message,
//         variant: "destructive",
//       });
//     } else {
//       setBookings(data || []);
//       setFilteredBookings(data || []);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   useEffect(() => {
//     let filtered = bookings;

//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       filtered = filtered.filter(
//         (b) =>
//           b.name.toLowerCase().includes(term) ||
//           b.email?.toLowerCase().includes(term) ||
//           b.phone.includes(term) ||
//           b.package.toLowerCase().includes(term)
//       );
//     }

//     if (statusFilter !== "all") {
//       filtered = filtered.filter((b) => b.status === statusFilter);
//     }

//     setFilteredBookings(filtered);
//   }, [searchTerm, statusFilter, bookings]);

//   const updateStatus = async (id: string, newStatus: string) => {
//     const { error } = await supabase
//       .from("bookings")
//       .update({ status: newStatus })
//       .eq("id", id);

//     if (error) {
//       toast({
//         title: "Error updating status",
//         description: error.message,
//         variant: "destructive",
//       });
//     } else {
//       toast({ title: "Status updated successfully" });
//       setBookings((prev) =>
//         prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
//       );
//     }
//   };

//   const getStatusBadge = (status: string) => {
//     const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
//       pending: "secondary",
//       contacted: "outline",
//       confirmed: "default",
//       payment_pending: "secondary",
//       completed: "default",
//       cancelled: "destructive",
//     };
//     const labels: Record<string, string> = {
//       pending: "Pending",
//       contacted: "Contacted",
//       confirmed: "Confirmed",
//       payment_pending: "Payment Pending",
//       completed: "Completed",
//       cancelled: "Cancelled",
//     };
//     return <Badge variant={variants[status] || "secondary"}>{labels[status] || status}</Badge>;
//   };

//   return (
//     <section className="section-padding bg-background min-h-screen">
//       <div className="container-custom">
//         <div className="mb-8">
//           <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
//             Booking Management
//           </h1>
//           <p className="text-muted-foreground">
//             View and manage all booking submissions
//           </p>
//         </div>

//         {/* Filters */}
//         <Card className="p-4 mb-6 bg-card">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search by name, email, phone, or package..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex gap-2">
//               <Select value={statusFilter} onValueChange={setStatusFilter}>
//                 <SelectTrigger className="w-[150px]">
//                   <Filter className="h-4 w-4 mr-2" />
//                   <SelectValue placeholder="Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Status</SelectItem>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="contacted">Contacted</SelectItem>
//                   <SelectItem value="confirmed">Confirmed</SelectItem>
//                   <SelectItem value="payment_pending">Payment Pending</SelectItem>
//                   <SelectItem value="completed">Completed</SelectItem>
//                   <SelectItem value="cancelled">Cancelled</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" onClick={fetchBookings} disabled={loading}>
//                 <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
//               </Button>
//             </div>
//           </div>
//         </Card>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Total</p>
//             <p className="text-2xl font-bold text-foreground">{bookings.length}</p>
//           </Card>
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Pending</p>
//             <p className="text-2xl font-bold text-amber-600">
//               {bookings.filter((b) => b.status === "pending").length}
//             </p>
//           </Card>
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Contacted</p>
//             <p className="text-2xl font-bold text-blue-600">
//               {bookings.filter((b) => b.status === "contacted").length}
//             </p>
//           </Card>
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Confirmed</p>
//             <p className="text-2xl font-bold text-green-600">
//               {bookings.filter((b) => b.status === "confirmed").length}
//             </p>
//           </Card>
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Payment Pending</p>
//             <p className="text-2xl font-bold text-orange-600">
//               {bookings.filter((b) => b.status === "payment_pending").length}
//             </p>
//           </Card>
//           <Card className="p-4 bg-card">
//             <p className="text-sm text-muted-foreground">Completed</p>
//             <p className="text-2xl font-bold text-primary">
//               {bookings.filter((b) => b.status === "completed").length}
//             </p>
//           </Card>
//         </div>

//         {/* Bookings List */}
//         {loading ? (
//           <div className="text-center py-12 text-muted-foreground">Loading bookings...</div>
//         ) : filteredBookings.length === 0 ? (
//           <Card className="p-12 text-center bg-card">
//             <p className="text-muted-foreground">No bookings found</p>
//           </Card>
//         ) : (
//           <div className="space-y-4">
//             {filteredBookings.map((booking) => (
//               <Card key={booking.id} className="p-6 bg-card">
//                 <div className="flex flex-col lg:flex-row lg:items-start gap-4">
//                   <div className="flex-1 space-y-3">
//                     <div className="flex items-center gap-3 flex-wrap">
//                       <h3 className="font-semibold text-lg text-foreground">{booking.name}</h3>
//                       {getStatusBadge(booking.status)}
//                     </div>
                    
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
//                       <div className="flex items-center gap-2 text-muted-foreground">
//                         <Phone className="h-4 w-4" />
//                         <a href={`tel:${booking.phone}`} className="hover:text-primary">
//                           {booking.phone}
//                         </a>
//                       </div>
//                       {booking.email && (
//                         <div className="flex items-center gap-2 text-muted-foreground">
//                           <Mail className="h-4 w-4" />
//                           <a href={`mailto:${booking.email}`} className="hover:text-primary">
//                             {booking.email}
//                           </a>
//                         </div>
//                       )}
//                       <div className="flex items-center gap-2 text-muted-foreground">
//                         <Package className="h-4 w-4" />
//                         <span>{booking.package}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-muted-foreground">
//                         <Calendar className="h-4 w-4" />
//                         <span>{format(new Date(booking.travel_date), "MMM d, yyyy")}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-muted-foreground">
//                         <Users className="h-4 w-4" />
//                         <span>{booking.travelers} travelers</span>
//                       </div>
//                     </div>

//                     {booking.message && (
//                       <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
//                         {booking.message}
//                       </p>
//                     )}

//                     <p className="text-xs text-muted-foreground">
//                       Submitted: {format(new Date(booking.created_at), "MMM d, yyyy 'at' h:mm a")}
//                     </p>
//                   </div>

//                   <div className="flex flex-row lg:flex-col gap-2">
//                     <Select
//                       value={booking.status}
//                       onValueChange={(value) => updateStatus(booking.id, value)}
//                     >
//                       <SelectTrigger className="w-[140px]">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="pending">Pending</SelectItem>
//                         <SelectItem value="contacted">Contacted</SelectItem>
//                         <SelectItem value="confirmed">Confirmed</SelectItem>
//                         <SelectItem value="payment_pending">Payment Pending</SelectItem>
//                         <SelectItem value="completed">Completed</SelectItem>
//                         <SelectItem value="cancelled">Cancelled</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Admin;

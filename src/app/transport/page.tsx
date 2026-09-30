"use client";

import React, { useState, useMemo } from "react";
import { Search, Bus, Phone, PlusCircle, Car } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Chip from "@/components/ui/Chip";
import Toggle from "@/components/ui/Toggle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import FormError from "@/components/ui/FormError";
import EmptyState from "@/components/ui/EmptyState";
import { MOCK_RIDES, RideListing } from "@/lib/mockData";

export default function TransportPage() {
  const [mode, setMode] = useState("have_vehicle"); // 'have_vehicle' | 'need_ride'

  // Offer Ride Form State
  const [vehicleType, setVehicleType] = useState<"Two-wheeler" | "Four-wheeler">("Two-wheeler");
  const [driverName, setDriverName] = useState("");
  const [phone, setPhone] = useState("");
  const [costPerKm, setCostPerKm] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [dropPoints, setDropPoints] = useState("");
  const [formError, setFormError] = useState("");
  const [postedSuccess, setPostedSuccess] = useState(false);

  // Find Ride Directory State
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVehicle, setFilterVehicle] = useState("Any");
  const [rides, setRides] = useState<RideListing[]>(MOCK_RIDES);

  const handlePostVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!driverName) {
      setFormError("Enter your name.");
      return;
    }
    if (!phone) {
      setFormError("Enter your 10-digit mobile number.");
      return;
    }
    setFormError("");

    const newRide: RideListing = {
      id: `r_${Date.now()}`,
      driverName,
      phone,
      vehicleType,
      collegeName: collegeName || "Govt Engineering College",
      dropPoints: dropPoints ? dropPoints.split(",").map((s) => s.trim()) : ["Main gate", "Campus Library"],
      costPerKm: costPerKm ? Number(costPerKm) : 7,
    };

    setRides([newRide, ...rides]);
    setPostedSuccess(true);
    setDriverName("");
    setPhone("");
    setCostPerKm("");
    setDropPoints("");

    setTimeout(() => {
      setPostedSuccess(false);
      setMode("need_ride");
    }, 1200);
  };

  const filteredRides = useMemo(() => {
    return rides.filter((ride) => {
      if (
        filterVehicle !== "Any" &&
        ride.vehicleType !== filterVehicle
      ) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          ride.driverName.toLowerCase().includes(q) ||
          ride.collegeName.toLowerCase().includes(q) ||
          ride.dropPoints.some((dp) => dp.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [rides, filterVehicle, searchQuery]);

  return (
    <div className="space-y-6 pb-12">
      {/* Headings */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">Transport</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Find a ride to campus or offer your vehicle to students.
        </p>
      </div>

      {/* Mode Toggle Switch */}
      <Toggle
        value={mode}
        onChange={setMode}
        options={[
          { value: "have_vehicle", label: "I have a vehicle" },
          { value: "need_ride", label: "I need a ride" },
        ]}
      />

      {/* Mode A: Offer a Ride Form */}
      {mode === "have_vehicle" && (
        <Card className="space-y-4">
          <div className="flex items-center justify-between border-b border-navy-800 pb-3">
            <h3 className="font-serif text-base font-semibold text-white flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-secondary" />
              <span>Offer your ride to students</span>
            </h3>
          </div>

          <FormError message={formError} />

          {postedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              ✓ Ride posted successfully! Switching to ride listings...
            </div>
          )}

          <form onSubmit={handlePostVehicle} className="space-y-4">
            {/* Vehicle Type selector */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-medium text-slate-300">Vehicle type</label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={vehicleType === "Two-wheeler" ? "secondary" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setVehicleType("Two-wheeler")}
                >
                  Two-wheeler
                </Button>
                <Button
                  type="button"
                  variant={vehicleType === "Four-wheeler" ? "secondary" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setVehicleType("Four-wheeler")}
                >
                  Four-wheeler
                </Button>
              </div>
            </div>

            <Input
              label="Your name"
              placeholder="Enter full name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />

            <Input
              label="Phone number"
              placeholder="10-digit mobile number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Input
              label="Cost per km (₹)"
              placeholder="e.g. 8"
              type="number"
              value={costPerKm}
              onChange={(e) => setCostPerKm(e.target.value)}
            />

            <Input
              label="College name"
              placeholder="e.g. Govt Engineering College Thrissur"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />

            <Input
              label="Drop points you cover"
              placeholder="e.g. Main gate, Bus stand"
              value={dropPoints}
              onChange={(e) => setDropPoints(e.target.value)}
            />

            <Button type="submit" variant="secondary" size="lg" fullWidth className="mt-2">
              Post my vehicle
            </Button>
          </form>
        </Card>
      )}

      {/* Mode B: Find a Ride Directory */}
      {mode === "need_ride" && (
        <div className="space-y-5">
          {/* Search */}
          <Input
            placeholder="Search by driver, college or place"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-4 h-4 text-slate-400" />}
          />

          {/* Vehicle Filter Chips */}
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-medium text-slate-300">Vehicle you need</span>
            <div className="flex gap-2">
              {["Any", "Two-wheeler", "Four-wheeler"].map((v) => (
                <Chip
                  key={v}
                  variant="secondary"
                  active={filterVehicle === v}
                  onClick={() => setFilterVehicle(v)}
                >
                  {v}
                </Chip>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-white">
              {filteredRides.length} vehicles available
            </h3>
          </div>

          {/* List */}
          {filteredRides.length === 0 ? (
            <EmptyState
              title="No rides found"
              description="No drivers available matching your filters right now."
              actionLabel="Show all rides"
              onAction={() => {
                setSearchQuery("");
                setFilterVehicle("Any");
              }}
            />
          ) : (
            <div className="space-y-4">
              {filteredRides.map((ride) => (
                <Card key={ride.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{ride.driverName}</CardTitle>
                      <p className="text-xs text-slate-400">{ride.collegeName}</p>
                    </div>
                    <Chip variant="dark" size="sm">
                      {ride.vehicleType}
                    </Chip>
                  </div>

                  <p className="text-xs text-slate-300">
                    Drops at: <span className="text-white font-medium">{ride.dropPoints.join(", ")}</span>
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-bold text-brand-primary">
                      ₹{ride.costPerKm} per km
                    </span>
                  </div>

                  <a href={`tel:${ride.phone}`} className="block pt-1">
                    <Button
                      variant="call"
                      size="md"
                      fullWidth
                      leftIcon={<Phone className="w-4 h-4" />}
                    >
                      Call {ride.phone}
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

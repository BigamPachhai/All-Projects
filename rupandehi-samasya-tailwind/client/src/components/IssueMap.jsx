import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const IssueMap = ({ issues, height = 320 }) => {
  const center = [27.6, 83.45]; // approx Rupandehi
  const markers = useMemo(
    () =>
      issues
        .filter((i) => i.coordinates && i.coordinates.lat && i.coordinates.lng)
        .map((i) => {
          const weight =
            (i.priorityScore || 0) / 40 + (i.upvoteCount || 0) * 0.2 + 1;
          const isResolved = i.status === "resolved";
          return {
            id: i._id,
            lat: i.coordinates.lat,
            lng: i.coordinates.lng,
            weight,
            isResolved
          };
        }),
    [issues]
  );

  return (
    <div className="rounded-2xl border border-amber-100 bg-white/80 p-3 shadow-sm shadow-amber-100">
      <div className="mb-2 flex items-center justify-between gap-2 text-xs">
        <div>
          <div className="font-semibold text-slate-800">
            समस्या हिटम्याप
          </div>
          <div className="text-[11px] text-slate-500">
            रातो ठूला डटहरू धेरै रिपोर्ट भएको क्षेत्र, हरियो समाधान भएका क्षेत्र
            हुन्।
          </div>
        </div>
      </div>
      <MapContainer
        center={center}
        zoom={11}
        style={{ height, width: "100%", borderRadius: "0.75rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((m) => (
          <CircleMarker
            key={m.id}
            center={[m.lat, m.lng]}
            radius={Math.min(10, 3 + m.weight)}
            pathOptions={{
              color: m.isResolved ? "#16a34a" : "#dc2626",
              fillColor: m.isResolved ? "#4ade80" : "#fb7185",
              fillOpacity: 0.5
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default IssueMap;

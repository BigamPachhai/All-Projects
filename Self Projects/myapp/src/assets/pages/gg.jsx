import { ReactSketchCanvas } from "react-sketch-canvas";

export default function DrawingBoard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Try Drawing!</h2>
      <ReactSketchCanvas
        style={{ border: "1px solid #000", borderRadius: "8px" }}
        width="600"
        height="400"
        strokeWidth={4}
        strokeColor="black"
      />
    </div>
  );
}

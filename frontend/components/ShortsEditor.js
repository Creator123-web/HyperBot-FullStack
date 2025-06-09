export default function ShortsEditor() {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Shorts Maker (Demo)</h2>
      <p className="mb-2">Upload and customize video clips here. (Demo placeholder)</p>
      <video controls src="/sample-video.mp4" className="w-full rounded" />
    </div>
  );
}

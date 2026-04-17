import { useBranding } from "../../shared/hooks/useBranding";
import VideoPlayer from "../../shared/video/VideoPlayer";

export default function PreviewVideo() {
  const brand = useBranding();
  const preview = brand.preview || {};

  const mainVideoId =
    preview.bunnyVideoId || brand.hero?.bunnyVideoId;

  const poster =
    preview.poster || brand.hero?.poster;

  // 🎯 ALL 3 VIDEOS TOGETHER
  const videos = [
    {
      id: mainVideoId,
      title: "Hello Friends",
      poster: poster,
    },
    {
      id: "f5264a6b-9889-4a68-8ad8-d1756e1b6eb1",
      title: "Learning Moments",
    },
    {
      id: "c4f88864-3680-418f-ba19-0d6e7744af4d",
      title: "Learning Fun",
    },
  ];

  return (
    <section className="bg-white text-black px-6 md:px-16 py-12">
      
      {/* 🎥 VIDEOS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((vid, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <VideoPlayer
              videoId={vid.id}
              poster={vid.poster}
            />

            <div className="p-3">
              <p className="font-semibold text-sm">
                {vid.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 📝 TEXT BELOW (optional) */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold">
          {preview.title}{" "}
          <span style={{ color: brand.colors.primary }}>
            {preview.highlight}
          </span>
        </h2>

        <p className="mt-4 text-gray-600">
          {preview.description}
        </p>
      </div>

    </section>
  );
}
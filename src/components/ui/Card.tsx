import { ShareIcon } from "../../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            Project ideas
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-8">
          {/* <iframe
            className="w-full"
            src="https://www.youtube.com/embed/Y5HIqjf3rek?si=PyRT8NHksjgnX69L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

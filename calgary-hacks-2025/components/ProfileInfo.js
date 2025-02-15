import RawImg from './RawImg';

function ProfileInfo() {
  return (
    <div className="flex gap-6 items-center p-6 max-md:flex-col max-md:items-start">
      <div className="flex gap-4 items-center">
        <RawImg
          image="https://placehold.co/80x80/e0e0e0/e0e0e0"
          altText="Profile"
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold text-black">
            Sarah Johnson
          </div>
          <div className="text-base text-black">
            Cooking Enthusiast
          </div>
          <div className="text-sm text-black">
            Joined since January 2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
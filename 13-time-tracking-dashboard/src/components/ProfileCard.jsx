import avatar from "src/assets/image-jeremy.png";

export function ProfileCard() {
  return (
    <div className="bg-purple600 flex w-full items-center gap-6 rounded-[15px] p-8">
      <div className="h-16 w-16 rounded-full border-4">
        <img className="w-full" src={avatar} alt="user avatar" />
      </div>
      <div className="flex h-[54px] flex-col justify-between gap-2">
        <p className="text-6 text-navy200">Report for</p>
        <h1 className="text-4">Jeremy Robson</h1>
      </div>
    </div>
  );
}

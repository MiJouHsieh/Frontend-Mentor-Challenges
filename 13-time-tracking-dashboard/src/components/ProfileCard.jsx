import avatar from "src/assets/image-jeremy.png";

export function ProfileCard() {
  return (
    <div className="bg-purple600 flex w-full items-center gap-6 rounded-[15px] p-8 lg:flex-1 lg:flex-col lg:items-start lg:gap-10">
      <div className="h-16 w-16 rounded-full border-4 lg:h-[78px] lg:w-[78px]">
        <img className="w-full" src={avatar} alt="user avatar" />
      </div>
      <div className="flex h-[54px] flex-col justify-between gap-2">
        <p className="text-6 text-navy200">Report for</p>
        <h1 className="text-4 lg:text-2">Jeremy Robson</h1>
      </div>
    </div>
  );
}

import { PROFILE } from '@/common/constant/data';

const Profile = () => {
  return (
    <div className="px-8 pt-10 lg:px-2 lg:pt-0">
      <div className="flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/profile.svg"
          alt={PROFILE.name}
          width={80}
          height={80}
          className="rotate-3 rounded-full border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105"
        />
        <div className="mt-1 flex items-center gap-2 lg:mt-4">
          <h2 className="flex-grow text-lg font-medium lg:text-xl">
            {PROFILE.name}
          </h2>
        </div>
        <div className="hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex">
          {PROFILE.handle}
        </div>
      </div>
      <div className="mt-4 hidden text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400 lg:block">
        {PROFILE.role}
      </div>
      <div className="mt-2 hidden items-center gap-2 lg:flex">
        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
          Open to work
        </span>
      </div>
    </div>
  );
};

export default Profile;

const members = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/78336530?v=4',
    login: 'jesusbgk',
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/33033501?v=4',
    login: 'pedroribeiroo',
  },
];

const DisplayMembers = () => {
  return (
    <>
      {members && (
        <div className="mt-4 grid grid-cols-1 place-items-center gap-16 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) =>
            <div key={member.login} className="flex w-32 flex-col items-center justify-center gap-2">
              <a href={`https://github.com/${member.login}`} target="_blank" className="flex flex-col items-center gap-2">
                <p className="text-sky-500 font-semibold">{member.login}</p>
                <img src={member.avatar_url} alt={`${member.login}-image`} className="rounded-md bg-neutral-100 shadow-md dark:bg-neutral-900" />
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DisplayMembers;


type ModalTeamMembersProps = {
  teamMembers: Character[] | undefined
  team: string;
  universe: string;
}

type Character = {
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string | null;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  _id: string;
  id: number;
  name: string;
  slug: string;
  comics?: string[];
}

function ModalTeamMembers({ teamMembers, team, universe }: ModalTeamMembersProps) {
  return (

    <div>
      <div>
        <input type="checkbox" id="my-modal-membersList" className="modal-toggle" />
        <label htmlFor="my-modal-membersList" className="modal cursor-pointer">
          <label className="modal-box relative flex flex-col gap-5" htmlFor="">
            <label htmlFor="my-modal-membersList" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <p className="text-lg font-bold">Members of {team === "All" ? universe : team}</p>
            <p>Total number of members: {teamMembers?.length}</p>
            <div className='flex flex-col gap-5'>
              
              <table className="table w-full">
                <thead>
                  <tr>
                    {/* <th className="invisible w-0"></th> */}
                    <th>Name</th>
                    <th>Publisher</th>
                    <th>Alignment</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    teamMembers !== undefined &&
                    teamMembers.map((currentMember: Character) => (
                      <tr key={currentMember.slug} className="hover">
                        {/* <td className="invisible w-0"></td> */}
                        <td>{currentMember.name}</td>
                        <td>{currentMember.biography.publisher}</td>
                        <td>{currentMember.biography.alignment}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
          </label>
        </label>
      </div>

    </div>
  )
}

export default ModalTeamMembers


/* <div>
            <input type="checkbox" id="my-modal-membersList" className="modal-toggle" />
            <label htmlFor="my-modal-membersList" className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-5" htmlFor="">
                    <label htmlFor="my-modal-membersList" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="text-lg font-bold">Members of {team === "All" ? universe : team}</p>
                    <p>Total number of members: {teamMembers?.length}</p>
                    <div className='flex flex-col gap-5'>
                        {teamMembers?.map((current) => (
                            <p key={current._id}>{current.name}</p>
                        ))}
                    </div>
                </label>
            </label>
        </div> */
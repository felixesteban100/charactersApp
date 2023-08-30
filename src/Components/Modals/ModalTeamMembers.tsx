import { publisherIMG } from "../../functions"
import { Character, ModalTeamMembersProps } from "../../types"
import Modal from "./Modal"


function ModalTeamMembers({ teamMembers, team, universe }: ModalTeamMembersProps) {
  return (
    <Modal
      id={`my-modal-membersList`}
      size="p-5"
      dataTestInside="modalCharacter"
      dataTestOutside="modalCharacterOutside"
    >
      <div className='flex flex-col gap-5 overflow-y-scroll max-h-[90vh]'>
        {/* <label htmlFor="my-modal-membersList" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
        <p className="text-lg font-bold">Members of {team === "All" ? universe : team}</p>
        <p>Total number of members: {teamMembers?.length}</p>
        <table className="table w-full">
          <thead>
            <tr>
              {/* <th className="invisible w-0"></th> */}
              <th>Name</th>
              <th>Publisher</th>
              <th>Alignment</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              teamMembers &&
              teamMembers.map((currentMember: Character) => (
                <tr key={currentMember.slug} className={`hover`}>
                  <td>{currentMember?.name}</td>
                  <td><img className="h-5" src={publisherIMG(currentMember?.biography.publisher)} alt="" /></td>
                  <td className={`${(currentMember.biography.alignment === "good") ? "text-success" : currentMember.biography.alignment === "bad" ? "text-danger" : "text-warning"}`}>{currentMember.biography.alignment === "good" ? "Hero" : currentMember.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}</td>
                  <td>{currentMember?.appearance.gender}</td>
                  <td><img className="h-20 w-16 object-cover" src={currentMember?.images.md} alt="" /></td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </Modal>


  )
}

export default ModalTeamMembers
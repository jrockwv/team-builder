import React from 'react';

const TeamMembers = props => {
    return (
        <div className='List'>
            {props.teamMember.map(Member => (
                <div key={Member.id} className="Member">
                    <h3>Name: {Member.name}</h3>
                    <p>Email: {Member.email}</p>
                    <p>Role: {Member.role}</p>

                </div>
            ))}

        </div>
    )

}

export default TeamMembers;
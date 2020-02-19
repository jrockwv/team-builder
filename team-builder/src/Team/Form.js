import React, {useState} from 'react';

function Forms(props) {

    const [teamMember, setTeamMember] = useState( {
        name:"",
        email:"",
        role:"",
    })

    const handleChange = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    const submit = event => {
        event.preventDefault();
        props.addTeamMember(teamMember);
        setTeamMember({name:"", email:"", role:""})
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor="name"></label>
            <input
            type="text"
            title="Name"
            placeholder="Team Members Name"
            id="name"
            name="name"
            value={teamMember.name}
            onChange={handleChange}
            />
            <label htmlFor="email"></label>
            <input
            type="email"
            Title="Email"
            placeholder="E-mail"
            id="email"
            name="email"
            value={teamMember.email}
            onChange={handleChange}
            />
            <label htmlFor="name"></label>
            <input
            type="text"
            Title="Role"
            placeholder="Role"
            id="role"
            name="role"
            value={teamMember.role}
            onChange={handleChange}
            />

            <button type="submit">Add Member</button>
        </form>
    )
}

export default Forms;
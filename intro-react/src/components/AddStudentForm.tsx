import { useState } from "react";

type AddStudentFormProps = {
    onAddStudent: (name: string) => void;
}

export default function AddStudentForm(props: AddStudentFormProps) {
    const { onAddStudent } = props;
    const [name, setName] = useState("");

    return (
        <form className="add-student-form">
            <label htmlFor="name">Navn</label>
            <input
                type="text"
                id="name"
                placeholder="Studentens navn"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Legg til student</button>
        </form>
    );
}
import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";

const initialStudent = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

function App() {
  const [students, setStudents] = useState<StudentProps[]>(initialStudent ?? []);

  const onAddStudent = (student: { name: string }) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  }

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student)  => student.id !== id));
  }
 
  return (
    <main>
      {/*<Student name="Cornelius" id="123" />*/}
      <Grid 
      students={students} 
      onAddStudent={onAddStudent}
      onRemoveStudent={onRemoveStudent}
      />
      <Total total={students.length} />
    </main>
  );
  
}

export default App;
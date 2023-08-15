import React from "react";
import { useSelector } from "react-redux";

function Page3() {
  const students = useSelector((state) => state.students);
  const lastStudent = students[students.length - 1];

  return (
    <div>
      {lastStudent ? (
        <p>
          Your name {lastStudent.name} aged {lastStudent.age} has been added to
          the student system. You may now exit.
        </p>
      ) : (
        <p>No students have been added yet.</p>
      )}
    </div>
  );
}

export default Page3;

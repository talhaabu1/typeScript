{
  // generic constraint
  const addCourseToStudent = <
    T extends { name: string; id: number; roll?: number }
  >(
    student: T
  ) => {
    const course = "next Level Web DeveLopment";
    console.log(student.name, student.id, student.roll);
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "talha",
    roll: 20,
    email: "talha@gmail.com",
  });

  const student2 = addCourseToStudent({
    id: 129,
    name: "julian",
  });
}

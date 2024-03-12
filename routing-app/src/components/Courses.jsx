import courses from "../data/data";

const Courses = () => {
  return (
    <div className="coursesWrapper">
      <h1>OUR COURSES</h1>
      <div className="iconWrapper">
        {courses.map((course) => {
          const { id, img, name, text } = course;
          return (
            <div className="card" key={id}>
              <img src={img} alt="img" />
              <div>
                <h5> {name} </h5>
                <p> {text} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

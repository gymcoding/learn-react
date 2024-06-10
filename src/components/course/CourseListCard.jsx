import CourseItem from './CourseItem'

function CourseListCard({ items }) {

  const [course1, course2, course3] = items;

  return (
    // style={{ backgroundColor: 'black', color: 'white' }}
    <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem
            {...course1}
          />
          <CourseItem
            {...course2}
          />
          <CourseItem
            {...course3}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseListCard;
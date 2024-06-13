import Card from '../Card';
import CourseItem from './CourseItem'

function CourseListCard({ items }) {

  return (
    <Card title='강의 목록'>
      <div className='courses'>
        {items.map(item => <CourseItem {...item} />)}
      </div>
    </Card>
  );
}

export default CourseListCard;
import Card from '../Card';
import CourseItem from './CourseItem'

function CourseListCard({ title, items }) {

  return (
    <Card title={title}>
      <div className='courses'>
        {items.map(item => <CourseItem {...item} />)}
      </div>
    </Card>
  );
}

export default CourseListCard;
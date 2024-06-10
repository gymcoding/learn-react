import CourseItem from './CourseItem'

function CourseListCard(props) {
  const course1 = {
    title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    thumbnail: '/img/htmlcss.png',
  };
  const course2 = {
    title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
    description: '쉽고! 알찬! 내용을 준비했습니다.',
    thumbnail: '/img/js.png',
  };
  const course3 = {
    title: '포트폴리오 사이트 만들고 배포까지!',
    description: '포트폴리오 사이트를 만들고 배포해 보세요.',
    thumbnail: '/img/portfolio.png',
  };

  return (
    // style={{ backgroundColor: 'black', color: 'white' }}
    <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem
            title={course1.title}
            description={course1.description}
            thumbnail={course1.thumbnail}
          />
          <CourseItem
            title={course2.title}
            description={course2.description}
            thumbnail={course2.thumbnail}
          />
          <CourseItem
            title={course3.title}
            description={course3.description}
            thumbnail={course3.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseListCard;
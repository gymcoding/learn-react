import Card from '../Card';

export default function CourseForm() {
  function handleCourseForm(e) {
    e.preventDefault();
  }
  return (
    <Card title="강의 등록">
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleCourseForm}>
        <input type="text" placeholder='강의 제목' />
        <input type="text" placeholder='강의 한줄 설명' />
        <input type="submit" value="등록" />
      </form>
    </Card>
  )
}
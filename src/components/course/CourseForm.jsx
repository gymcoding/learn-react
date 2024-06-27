import { useState } from 'react';
import Card from '../Card';

export default function CourseForm() {
  const [form, setForm] = useState({
    title: '리액트 강의',
    description: '리액트 기초부터 실전까지!'
  });
  function handleCourseForm(e) {
    e.preventDefault();
    setForm
  }
  const handleTitleChange = (e) => {
    setForm({
      ...form,
      title: e.target.value
    })
  }
  const handleDescriptionChange = (e) => {
    setForm({
      ...form,
      description: e.target.value
    })
  }
  return (
    <Card title="강의 등록">
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={handleCourseForm}>
        <input type="text" placeholder='강의 제목' value={form.title} onChange={handleTitleChange} />
        <input type="text" placeholder='강의 한줄 설명' value={form.description} onChange={handleDescriptionChange} />
        <input type="submit" value="등록" />
      </form>
      {(form.title || form.description) && (
        <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px' }}>
          {form.title && (<p>제목 - {form.title}</p>)}
          {form.description && (<p>설명 - {form.description}</p>)}
        </div>
      )}
    </Card>
  )
}
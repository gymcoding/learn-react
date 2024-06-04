import React from 'react';
import CourseItem from './CourseItem'

function CourseListCard(props) {
  return (
    <div class="card">
      <div class="card__header">강의 목록</div>
      <div class="card__body">
        <div class="courses">
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
}

export default CourseListCard;
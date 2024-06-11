function HeartIconBtn({ isFavorite = false }) {
  return (
    <button className="btn">
      {/* {isFavorite ? (
        <img className="icon-heart" src="/img/heart-fill-icon.svg" />
      ) : (
        <img className="icon-heart" src="/img/heart-icon.svg" />
      )} */}
      <img className="icon-heart" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'} />
    </button>
  )
}

export default function CourseItem({ title, description, thumbnail, isFavorite }) {
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} />
      </div>
    </article>
  );
}
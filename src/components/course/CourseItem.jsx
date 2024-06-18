function HeartIconBtn({ onClick, isFavorite = false }) {

  return (
    <button className="btn" onClick={(e) => onClick(e, isFavorite)}>
      <img className="btn__img" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'} />
    </button>
  )
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" />
    </a>
  )
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
  function handleFavorite() {
    alert(isFavorite ? '좋아요' : '모르겠어요.');
  }
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
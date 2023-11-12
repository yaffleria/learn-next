interface Prop {
  readonly lecture: Lecture
}

export default function LectureItem(props: Prop) {
  const { lecture } = props

  return (
    <div>
      <img src={lecture.thumb} alt="초격차 패키지" width="40px" height="auto" />
      <span>{lecture.tags}</span>
      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>
    </div>  
  )
}

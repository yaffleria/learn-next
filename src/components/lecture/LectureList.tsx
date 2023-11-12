import LectureItem from './LectureItem'
import useLectures from '@/hooks/useLectures'

export default function LectureList() {
  const { isLoading, data } = useLectures()

  if (isLoading) {
    return <div>Loading...</div>
  }

  const lectureItems = data.map((lecture: Lecture) => {
    return (<LectureItem key={lecture.id} lecture={lecture}/>)
  })

  return (
    <>
      { lectureItems }
    </>
  )
}

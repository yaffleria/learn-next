import { useQuery } from '@tanstack/react-query'

const useLectures = () => {
  return useQuery({
    queryKey: ['lecture_list'],
    queryFn: async () => {
      const r = await fetch('/api/lectures')
      const d = await r.json()

      return d.lectureList
    },
    refetchInterval: 5000
  })
}

export default useLectures

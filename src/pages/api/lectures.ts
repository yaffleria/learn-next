// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  lectureList: Lecture[]
}

const data: Data = {
  lectureList: [
    {
      id: 0,
      title: '초격차 패키지: 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: [
        '평생소장',
        'AWS',
        'DevOps'
      ],
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 룰을 실습!',
      thumb: 'https://i.kym-cdn.com/photos/images/original/002/698/694/58d.png',
      isHot: true,
      isNew: true
    },
    {
      id: 1,
      title: '초격차 패키지: 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: [
        '평생소장',
        'AWS',
        'DevOps'
      ],
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 42가지 룰을 실습!',
      thumb: 'https://i.kym-cdn.com/photos/images/original/002/698/694/58d.png',
      isHot: true,
      isNew: true
    },
    {
      id: 2,
      title: '초격차 패키지: 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
      tags: [
        '평생소장',
        'AWS',
        'DevOps'
      ],
      description: '개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 43가지 룰을 실습!',
      thumb: 'https://i.kym-cdn.com/photos/images/original/002/698/694/58d.png',
      isHot: true,
      isNew: true
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}

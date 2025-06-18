import axios from 'axios';

// const isDev = import.meta.env.MODE === 'development';

export const fetchCodeReviewResult = async (patch: string): Promise<string> => {
  // if (isDev) {
  //   console.log('개발 모드에서는 실제 API 호출을 하지 않습니다.');
  //   return '개발 모드에서는 실제 API 호출을 하지 않습니다.';
  // }

  const res = await axios.post('/api/v1/pr/review', { patch });
  return res.data.choices?.[0]?.message?.content ?? '설명 없음';
};

export const fetchRefactorResult = async (patch: string): Promise<string> => {
  // if (isDev) {
  //   console.log('개발 모드에서는 실제 API 호출을 하지 않습니다.');
  //   return '개발 모드에서는 실제 API 호출을 하지 않습니다.';
  // }

  const res = await axios.post('/api/v1/pr/refactor', { patch });
  return res.data.choices?.[0]?.message?.content ?? '리팩토링 결과 없음';
};

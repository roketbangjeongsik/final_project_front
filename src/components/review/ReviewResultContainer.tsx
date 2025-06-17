import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ReviewResultPanel } from './ReviewResultPanel';
import { fetchRefactorResult } from '../../api/review';
import { ReviewResultSearchButton } from './ReviewResultSearchButton';
import { SearchPanel } from './SearchPanel';

const tabs = ['코드 설명', '리팩토링 제안'] as const;
export type Tab = (typeof tabs)[number];

export const ReviewResultContainer = () => {
  const location = useLocation();
  const { diff = '', content = {} } = location.state ?? {};
  const [activeTab, setActiveTab] = useState<Tab>('코드 설명');
  const [reviewContent, setReviewContent] = useState<{
    description?: string;
    refactor?: string;
  }>({
    description: content.description,
  });
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const loadRefactor = async () => {
      if (activeTab === '리팩토링 제안' && !reviewContent.refactor) {
        try {
          const refactor = await fetchRefactorResult(diff);
          console.log('pr/refactor 응답:', refactor);
          setReviewContent(prev => ({ ...prev, refactor }));
        } catch (err) {
          console.error('리팩토링 요청 실패:', err);
          setReviewContent(prev => ({ ...prev, refactor: '리팩토링 요청 중 오류 발생' }));
        }
      }
    };
    loadRefactor();
  }, [activeTab, diff, reviewContent.refactor]);

  return (
    <>
      <ReviewResultPanel
        diff={diff}
        content={reviewContent}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      <SearchPanel visible={showSearch} onClose={() => setShowSearch(false)} />

      {!showSearch && <ReviewResultSearchButton onClick={() => setShowSearch(true)} />}
    </>
  );
};

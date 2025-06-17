import DiffViewer from 'react-diff-viewer-continued';
import type { Tab } from './ReviewResultContainer';

type Props = {
  diff: string;
  content: { description?: string; refactor?: string };
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  tabs: readonly Tab[];
};

export const ReviewResultPanel = ({ diff, content, activeTab, onTabChange, tabs }: Props) => {
  const getContentText = () =>
    activeTab === '코드 설명'
      ? (content.description ?? '설명 없음')
      : (content.refactor ?? '리팩토링 없음');

  return (
    <>
      <div className="flex justify-center space-x-6 border-b mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 text-lg font-semibold border-b-2 ${
              activeTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-text-description'
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex space-x-6" style={{ height: 'calc(100vh - 160px' }}>
        <div className="w-1/2 overflow-auto border rounded bg-white">
          <DiffViewer
            oldValue={''}
            newValue={diff}
            splitView={false}
            showDiffOnly={false}
            hideLineNumbers={false}
            disableWordDiff={false}
            styles={{
              variables: {
                light: {
                  codeFoldBackground: '#f3f4f6',
                  addedBackground: '#e6ffed',
                  removedBackground: '#ffeef0',
                },
              },
              codeFold: { whiteSpace: 'pre-wrap', wordBreak: 'break-all' },
              contentText: { whiteSpace: 'pre-wrap', wordBreak: 'break-all' },
            }}
          />
        </div>

        <div className="w-1/2 overflow-auto border rounded p-4 text-sm whitespace-pre-wrap leading-relaxed">
          {getContentText()}
        </div>
      </div>
    </>
  );
};

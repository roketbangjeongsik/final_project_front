import FileItem from './FileItem';

const dummyFiles = [
  { id: 1, title: 'Update README.md',      user: 'UserName', updated: 'Updated_at', showIcon: false },
  { id: 2, title: '[feat] lucide-react 의존성 추가', user: 'UserName', updated: 'Updated_at', showIcon: true },
  { id: 3, title: '[chore] Tailwind CSS 설정 추가', user: 'UserName', updated: 'Updated_at', showIcon: false },
  { id: 4, title: '[init] 프로젝트 초기 설정',   user: 'UserName', updated: 'Updated_at', showIcon: false },
];

const FileList = () => (
  <div className="divide-y divide-border">
    {dummyFiles.map(file => (
      <FileItem
        key={file.id}
        title={file.title}
        user={file.user}
        updated={file.updated}
        showIcon={file.showIcon}
      />
    ))}
  </div>
);

export default FileList;
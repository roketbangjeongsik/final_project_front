import { FileList } from '../components/file/FileList';
import { dummyFiles } from '../mocks/file';

export const FilePage = () => {
  const handleFileSelect = () => {
    console.log('SelectFile Handler');
  }; // 파일 선택 핸들러 추후 구현예정

  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full px-[20%] py-20">
        <FileList files={dummyFiles} onSelect={handleFileSelect} />
      </div>
    </div>
  );
};

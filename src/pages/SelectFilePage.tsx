import Dropdown from '../components/main/SelectFile/Dropdown'
import FileList from '../components/main/SelectFile/FileList'
import Pagination from '../components/main/Pagination'
import { FiChevronsLeft } from "react-icons/fi";

export default function SelectFilePage() {
  return (
    <div className="px-6 sm:px-12 mt-8 md:px-20 lg:px-36 xl:px-40 pt-12 bg-white min-h-screen">
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium text-gray-800">Commits / PR</h2>
        <Dropdown label="Type" />
      </div>
      
      {/* 구분선 */}
      <hr className="border-t border-gray-200 mb-8" />      
      
      {/* 리스트 */}
      <div className="relative"></div>
      <FileList />
      
      {/* 페이지 왼쪽 가운데 화살표 버튼 위치 */}
      <button type="button" className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 focus:outline-none">
        <FiChevronsLeft className="w-4 h-4 text-text-description" />
      </button>

      {/* 하단 가운데 페이지 숫자 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Pagination />
      </div>        
    </div>
  );
}
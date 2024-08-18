import Result from "#widgets/result";
import Modal from "#shared/ui/modal";
import SearchModal from "#widgets/search-modal/ui/search-modal.jsx";
import Search from "#widgets/search/index.js";

import "./mainPage.scss";
function MainPage() {
  return (
    <main className="page">
      <Modal modalName="advanced-search">
        <SearchModal />
      </Modal>
      <Search />
      <Result />
    </main>
  );
}

export default MainPage;

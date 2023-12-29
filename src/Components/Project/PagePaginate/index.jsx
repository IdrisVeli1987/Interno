import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Items from "../Items";
import "./styles.css";

const PagePaginate = ({ bedroomFiles }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = bedroomFiles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(bedroomFiles.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % bedroomFiles.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PagePaginate;

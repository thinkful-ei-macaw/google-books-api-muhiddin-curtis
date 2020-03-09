import React, {Component} from 'react'


class Filter extends Component {
    render() {
      return(
     <section className="filter-bars"> 
        <div className="print-type">
          <label htmlFor="book-filter">Print Type: </label>
            <select id="print-type" name="print-type">
              <option value="all">All</option>
              <option value="text-book">text book</option>
              <option value="ebook">eBook</option>
            </select>
        </div>
        <div className="book-type">
          <label htmlFor="book-filter">Book Type: </label>
            <select id="" name="">
              <option value="text-book">text book</option>
              <option value="ebook">eBook</option>
            </select>
        </div>
     </section>   
      );
    };
}

export default Filter;

/**
 * const values = Object.fromEntries(new FormData(e.target));, e.target.foobarbaz.value 
 */


















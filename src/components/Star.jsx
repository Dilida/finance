
const Star = ({ lists, handleSelectChange }) => {
  return (
    <>
      {lists.map((list) => (
        <div key={list.id}>
          <hr/>
          <div className="row gy-2 gx-6 list-suggest">
            <div className="form-check col-2">
              {list.name}
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id+"star5"}>五顆星<input id={list.id+"star5"} className="form-check-input" type="radio" name={list.id} value="5" onChange={handleSelectChange} required/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id+"star4"}> 四顆星<input id={list.id+"star4"} className="form-check-input" type="radio" name={list.id} value="4" onChange={handleSelectChange}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id+"star3"}>三顆星<input id={list.id+"star3"} className="form-check-input" type="radio" name={list.id} value="3" onChange={handleSelectChange}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id+"star2"}>兩顆星<input id={list.id+"star2"} className="form-check-input" type="radio" name={list.id} value="2" onChange={handleSelectChange}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-auto">
              <label htmlFor={list.id+"star1"}>一顆星<input id={list.id+"star1"} className="form-check-input" type="radio" name={list.id} value="1" onChange={handleSelectChange}/></label>
              <i className="bx bxs-star"></i>
            </div>
          </div>
        </div>

      ))}
    </>



  )
}

export default Star


const Start = ({ lists }) => {
  return (
    <>
      {lists.map((list) => (
        <div key={list.id}>
          <hr/>
          <form className="row gy-2 gx-6 list-suggest">
            <div className="form-check col-2">
              {list.name}
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id}>五顆星<input className="form-check-input" type="radio" name={list.id}/></label><i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id}>四顆星<input className="form-check-input" type="radio" name={list.id}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id}>三顆星<input className="form-check-input" type="radio" name={list.id}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-2">
              <label htmlFor={list.id}>兩顆星<input className="form-check-input" type="radio" name={list.id}/></label>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <div className="form-check col-auto">
              <label htmlFor={list.id}>一顆星<input className="form-check-input" type="radio" name={list.id}/></label>
              <i className="bx bxs-star"></i>
            </div>
          </form>
        </div>

      ))}
    </>



  )
}

export default Start
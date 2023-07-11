const Satisfy = ({handleSelectChange}) => {
  return (
    <div className="form-group mt-5">
      <label htmlFor="suggestion3" className="suggest">
        <i className="bi bi-globe"></i>
        <h4>網站綜合評價</h4>
      </label>
      <hr/>
      <div className="row gy-2 ms-lg-5">
        <div className="form-check col-2 satisfy">
          <label htmlFor="platform4">很滿意<input className="form-check-input" type="radio" name="platform4" value="5" onChange={handleSelectChange} required/></label>
          <i className="bx bxs-happy-alt"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="platform4">滿意<input className="form-check-input" type="radio" name="platform4" value="4" onChange={handleSelectChange}/></label>
          <i className="bx bxs-smile"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="platform4">普通<input className="form-check-input" type="radio" name="platform4" value="3" onChange={handleSelectChange}/></label>
          <i className="bx bxs-meh"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="platform4">不滿意<input className="form-check-input" type="radio" name="platform4" value="2" onChange={handleSelectChange}/></label>
          <i className="bx bxs-confused"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="platform4">很不滿意<input className="form-check-input" type="radio" name="platform4" value="1" onChange={handleSelectChange}/></label>
          <i className="bx bxs-angry"></i>
        </div>
      </div>
    </div>

  )
}

export default Satisfy

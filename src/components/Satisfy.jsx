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
          <label htmlFor="網站綜合評價">很滿意<input className="form-check-input" type="radio" name="platform4" value="5" onChange={handleSelectChange} required/></label>
          <i className="bx bxs-happy-alt" title="很滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="網站綜合評價">滿意<input className="form-check-input" type="radio" name="platform4" value="4" onChange={handleSelectChange}/></label>
          <i className="bx bxs-smile" title="滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="網站綜合評價">普通<input className="form-check-input" type="radio" name="platform4" value="3" onChange={handleSelectChange}/></label>
          <i className="bx bxs-meh" title="普通"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="網站綜合評價">不滿意<input className="form-check-input" type="radio" name="platform4" value="2" onChange={handleSelectChange}/></label>
          <i className="bx bxs-confused" title="不滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="網站綜合評價">很不滿意<input className="form-check-input" type="radio" name="platform4" value="1" onChange={handleSelectChange}/></label>
          <i className="bx bxs-angry" title="很不滿意"></i>
        </div>
      </div>
    </div>

  )
}

export default Satisfy

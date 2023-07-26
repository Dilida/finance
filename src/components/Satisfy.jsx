const Satisfy = ({handleSelectChange, disableSend}) => {
  return (
    <div className="form-group mt-5">
      <label htmlFor="suggestion3" className="suggest">
        <i className="bi bi-globe"></i>
        <h3>網站綜合評價</h3>
      </label>
      <hr/>
      <div className="row gy-2 ms-lg-5">
        <div className="form-check col-2 satisfy">
          <label htmlFor="sa5">很滿意<input id="sa5" className="form-check-input" type="radio" name="overall" value="5" disabled={disableSend} onChange={handleSelectChange} required/></label>
          <i className="bx bxs-happy-alt" title="很滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="sa4">滿意<input id="sa4" className="form-check-input" type="radio" name="overall" value="4" disabled={disableSend} onChange={handleSelectChange}/></label>
          <i className="bx bxs-smile" title="滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="sa3">普通<input id="sa3" className="form-check-input" type="radio" name="overall" value="3" disabled={disableSend} onChange={handleSelectChange}/></label>
          <i className="bx bxs-meh" title="普通"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="sa2">不滿意<input id="sa2" className="form-check-input" type="radio" name="overall" value="2" disabled={disableSend} onChange={handleSelectChange}/></label>
          <i className="bx bxs-confused" title="不滿意"></i>
        </div>
        <div className="form-check col-2 satisfy">
          <label htmlFor="sa1">很不滿意<input id="sa1" className="form-check-input" type="radio" name="overall" value="1" disabled={disableSend} onChange={handleSelectChange}/></label>
          <i className="bx bxs-angry" title="很不滿意"></i>
        </div>
      </div>
    </div>

  )
}

export default Satisfy

import React from "react";

const RequestProposalPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission using Formspree or another service here
  };

  return (
    <div className="container">
      <h2>Request a Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name (required)</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Telephone (required)</label>
          <input type="tel" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email (required)</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label>Project Address</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Building SQ FT</label>
          <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Request
        </button>
      </form>
    </div>
  );
};

export default RequestProposalPage;

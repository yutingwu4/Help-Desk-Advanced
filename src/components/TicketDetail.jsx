/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */

import React from 'react';

export default function TicketDetail({ authorized, ticket, updateTicketStatus }) {
  //if authorized: true, then return: 

  const notAuth =
    <div className="ticketDetail">
      <p>
        <span className="detailLabel">Student: </span> {ticket.student}
      </p>
      <p>
        <span className="detailLabel">Problem: </span>
        {ticket.problem}
      </p>

      <p>
        <span className="detailLabel">What we expected to happen:</span> {ticket.expectations}
      </p>
      <p>
        <span className="detailLabel">What we've tried: </span> {ticket.tried}
      </p>
      <p>
        <span className="detailLabel">Why we expect it's not working: </span> {ticket.notWorking}
      </p>
      <p>
        <span className="detailLabel">Zoom room: </span>

        <a href="#">{ticket.zoom}</a>
      </p>
    </div>;

  const auth =
    <div className="ticketDetailAuth">
      <form>
        <div class="form-group">
          <span className="detailLabel">SUBMIT:</span>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form >

      <button className="resolveBtn" onClick={() => updateTicketStatus(ticket)}>
        RESOLVE
      </button>

    </div >;

  if (authorized) {
    return (
      <div className='ticketContainer'>
        <div>
          {notAuth}
          <br />
          {auth}
        </div>
      </div >
    );
  }
  else {
    return (
      <div className='ticketContainer'>
        {notAuth}
      </div>
    )
  }
}

//if authorized: true, display resolve button, otherwise don't
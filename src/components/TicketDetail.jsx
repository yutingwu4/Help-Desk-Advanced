/**
 * @name TicketDetail
 * @desc Component to show more details when user clicks the ticket.
 */

import React from 'react';

export default function TicketDetail({ authorized, ticket, updateTicketStatus }) {
  return (
    <div className="ticketDetail">
      <p>
        <span className="detailLabel">Student: </span> {authorized}
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

      <form>
        <div class="form-group">
          <label for="text area">Submit notes</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>

      <button className="resolveBtn" onClick={() => updateTicketStatus(ticket)}>
        Resolve
      </button>

    </div>
  );
}

//if authorized: true, display resolve button, otherwise don't
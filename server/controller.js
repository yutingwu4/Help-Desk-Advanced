const models = require('../server/Model');
const TicketForm = models.TicketForm;

//setTicket will create a new Ticket in our DB. Please Note: Not all fields are required, check schema
exports.setTicket = (req, res) => {
  const { status, student, problem, fellow, expectations, tried, notWorking, zoom, resolvedNotes } = req.body;
  TicketForm.create(
    {
      status,
      student,
      problem,
      fellow,
      expectations,
      tried,
      notWorking,
      zoom,
      resolvedNotes,
    },
    (err, result) => {
      if (err) {
        console.log('Error creating new ticket:', err);
        return res.status(400).json(err);
      }
      return res.status(200).json(result);
    }
  );
};
//getTickets will retrieve an array of Tickets that are stored in our DB. Status veries per Ticket. Front End handles filtering
exports.getTickets = (req, res) => {
  TicketForm.find({}, (err, results) => {
    if (err) {
      console.log('Error finding tickets:', err);
      return res.status(500).json(err);
    }
    return res.status(200).json(results);
  });
};

exports.resolveTicket = (req, res) => {
  //resolveTicket needs: ticket ID and status, username, resolvedNotes
  if (res.locals.authorized !== true) return res.status(400).send('The user is not authorized to perform this action');
  else {
    const { id, status, resolvedNotes } = req.body;
    TicketForm.findOneAndUpdate({ _id: id }, { status, resolvedNotes }, { new: true, useFindAndModify: false }, (err, result) => {
      if (err) return (next(err));

      if (!result) {
        console.log('Could not update the Ticket ', err);
        return res.status(500).send(err);
      }
      //the result should be the updated version of the ticket you are resolving
      return res.status(200).send(`Ticket has been resolved. Ticket Info: ${result}`);
    });

  }
};

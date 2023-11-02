import "./DashBoard.css";
import Priorities from "../DashBoardSections/PrioritySection/Priorities";
import Status from "../DashBoardSections/StatusSection/Status";
import Users from "../DashBoardSections/UserSection/Users";

const DashBoard = (props) => {
  const statusName = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
  const { groupingOption, sortingOption } = props;
  const userIdObjects = {};
  const priorityObjects = {};
  var statusObjects = {};
  const userName = {};

  statusName.forEach((status) => {
    statusObjects[status] = [];
  });

  if (props.data !== null) {
    props.data.users.forEach(({ id, name, available }) => {
      userName[id] = { name, available };
    });

    props.data.tickets.forEach((ticket) => {
      const userId = ticket.userId;
      const priority = ticket.priority;
      const status = ticket.status;

      if (!userIdObjects[userId]) {
        userIdObjects[userId] = [];
      }

      if (!priorityObjects[priority]) {
        priorityObjects[priority] = [];
      }

      if (!statusObjects[status]) {
        statusObjects[status] = [];
      }

      userIdObjects[userId].push(ticket);
      priorityObjects[priority].push(ticket);
      statusObjects[status].push(ticket);
    });

    statusObjects = Object.entries(statusObjects)
      .sort(([, a], [, b]) => b.length - a.length)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  }

  function renderGrouping() {
    if (groupingOption === "status") {
      return (
        <Status
          data={statusObjects}
          userName={userName}
          sortingOption={sortingOption}
        ></Status>
      );
    } else if (groupingOption === "user") {
      return (
        <Users
          data={userIdObjects}
          userName={userName}
          sortingOption={sortingOption}
        ></Users>
      );
    } else {
      return (
        <Priorities
          data={priorityObjects}
          userName={userName}
          sortingOption={sortingOption}
        />
      );
    }
  }

  return <div className="container">{renderGrouping()}</div>;
};

export default DashBoard;

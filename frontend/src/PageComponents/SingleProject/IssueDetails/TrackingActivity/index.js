import React from "react";
import { withIssueLogsQuery } from "shared/HOC/Issue";

import { LogWrapper, LogItemWrapper, LogItemInner } from "./styles";

import { TrackingHeader } from "./TrackingHeader";
import { TrackingContent } from "./TrackingContent";

const TrackingActivity = ({ issue, logsOnIssue = [], loading }) => {
  const logs = logsOnIssue.filter((log) => log.type !== "Create");
  return (
    <LogWrapper>
      {logs.map((log) => {
        const { user, created } = log;
        return (
          <LogItemWrapper name="LogItemWrapper" key={log.id}>
            <div className="relative inner">
              <TrackingHeader user={user} date={created} />
              <TrackingContent log={log} issue={issue} />
            </div>
          </LogItemWrapper>
        );
      })}
    </LogWrapper>
  );
};

export default withIssueLogsQuery(TrackingActivity);
